import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var notes = this.get('store').peekAll('note');
        if(params.folder_id !== "All notes") {
            notes = notes.filterBy('folder', params.folder_id);
        }

        return {
            notes: notes,
            editMode: false,
            singleNote: Ember.computed('notes.length', () =>
                notes.get('length') === 1
            ),
            numSelected: Ember.computed('notes.@each.edit', () =>
                notes.filterBy('edit', true).get('length')
            ),
            folder: params.folder_id
        };
    }
});
