import Ember from 'ember';
export default Ember.Controller.extend({
    actions: {
        addNote() {
            let notes = this.get('model.notes');
            this.set('model.singleNote', notes.content.length == 0);

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
            note.set('selected', true);
            this.set('model.selectedNote', note);
        },

        toggleEdit() {
            if(this.get('model.editMode')) {
                this.get('model.notes').map(note => note.set('edit', false));
            }
            this.toggleProperty('model.editMode');
        },

        rowSelected() {
            if(this.get('model.editMode')) {
                var selectedNotes = 0;

                this.get('model.notes').forEach(note => {
                    if(note.get('edit')) {
                        selectedNotes++;
                    }
                });

                this.set('model.numSelected', selectedNotes);
            }
        }
    }
});
