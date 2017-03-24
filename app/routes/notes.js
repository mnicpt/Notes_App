import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        var folders = this.get('store').peekAll('folder');
        if(folders.get('length') === 0) {
            this.get('store').push({
                data: [{
                    id: 'All notes',
                    type: 'folder',
                    attributes: {
                        title: 'All notes',
                        edit: false
                    }
                }]
            })
        }
    },

    model() {
        var folders = this.get('store').peekAll('folder');
        var notes = this.get('store').peekAll('note');

        return {
            folders: folders,
            notes: notes,
            singleNote: Ember.computed('notes.length', () =>
                notes.get('length') == 1
            ),
            editMode: false,
            numSelected: Ember.computed('folders.@each.edit', () =>
                folders.filterBy('edit', true).get('length')
            )
        }
    }
});
