import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        back() {
            this.resetModelPropertyValue('model.notes', 'selected', false);
            this.transitionToRoute('notes');
        },

        addNote() {
            var store = this.get('store');

            store.push({
                data: [{
                    id: this.get('store').peekAll('note').get('length'),
                    type: 'note',
                    attributes: {
                        title: "New Note",
                        content: "",
                        date: new Date(),
                        selected: false,
                        edit: false,
                        folder: this.get('model.folder')
                    }
                }]
            })

            if(this.get('model.folder') === 'All notes') {
                this.updateModel('model.notes', store.peekAll('note'));
            } else {
                this.updateModel('model.notes', store.peekAll('note').filterBy('folder', this.get('model.folder')));
            }
        },

        select(note) {
            this.resetModelPropertyValue('model.notes', 'selected', false);
            
            if(!this.get('model.editMode')) {
                this.transitionToRoute('note', note.get('id'));
            }
        },

        edit(note) {
            note.toggleProperty('edit');
        },

        toggleEdit() {
            if(this.get('model.editMode')) { //transitioning out of editMode
                this.resetModelPropertyValue('model.notes', 'edit', false);
            }

            this.toggleProperty('model.editMode');
        }
    },

    resetModelPropertyValue(model, prop, value) {
        this.get(model).map(obj => obj.set(prop, value));
    },

    updateModel(model, value) {
        this.set(model, value);
    }
});
