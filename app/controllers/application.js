import Ember from 'ember';
export default Ember.Controller.extend({
    actions: {
        addNote() {
            let notes = this.get('model.notes');

            this.get('store').push({
                data: [{
                    id: notes.content.length,
                    type: 'note',
                    attributes: {
                        title: 'New Note',
                        date: new Date().toUTCString(),
                        content: "",
                        selected: false
                    }
                }]
            })
        },

        showNote(note) {
            this.get('model.notes').map(note => note.set('selected', false));
            this.set('model.selectedNote', note);
        },

        toggleEdit() {
            if(this.get('model.editMode')) {
                this.get('model.notes').map(note => note.set('edit', false));
            }
            this.toggleProperty('model.editMode');
        }
    }
});
