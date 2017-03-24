import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        back() {
            this.get('model.notes').map(note => note.set('selected', false));
            this.transitionToRoute('notes');
        },

        addNote() {
            this.get('store').push({
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

            this.set('model.notes', this.get('store').peekAll('note').filterBy('folder', this.get('model.folder')));
        },

        select(note) {
            this.get('model.notes').map(note => note.set('selected', false));
            
            if(!this.get('model.editMode')) {
                this.transitionToRoute('note', note.get('id'));
            }
        },

        edit(note) {
            note.toggleProperty('edit');
        },

        toggleEdit() {
            if(this.get('model.editMode')) {
                this.get('model.notes').map(note => note.set('edit', false));
            }
            this.toggleProperty('model.editMode');
        }
    }
});
