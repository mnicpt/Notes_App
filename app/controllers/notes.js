import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addFolder() {
            var title = prompt("What to you want to name your folder?");

            this.get('store').push({
                data: [{
                    id: title,
                    type: 'folder',
                    attributes: {
                        title: title,
                        edit: false
                    }
                }]
            })
        },

        deleteFolders() {
            let store = this.get('store');
            let folders = this.get('model.folders').filterBy('edit', true);
            
            let notes = this.get('model.notes').forEach((current_note) => {
                folders.forEach((current_folder) => {
                    if(current_note.get('folder') === current_folder.get('title')) {
                        store.unloadRecord(current_note);
                    }
                });
            });

            folders.forEach((folder) => {
                store.unloadRecord(folder);
            });

            this.set('model.editMode', false);
        },

        select(folder) {
            this.get('model.folders').map(folder => folder.set('selected', false));
            folder.set('selected', true);
            
            if(!this.get('model.editMode')) {
                this.transitionToRoute('notes-folder', folder.get('id'));
            }
        },

        edit(folder) {
            folder.toggleProperty('edit');
        },

        toggleEdit() {
            if(this.get('model.editMode')) {
                this.get('model.folders').map(folder => folder.set('edit', false));
            }
            this.toggleProperty('model.editMode');
        }
    }
});
