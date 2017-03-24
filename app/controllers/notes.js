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
        select(folder) {
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
