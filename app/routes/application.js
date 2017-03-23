import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var notes = this.get('store').peekAll('note');

        return {
            notes: notes,
            singleNote: Ember.computed('notes.length', () =>
                notes.get('length') === 1
            ),
            selectedNote: null,
            editMode: false,
            numSelected: Ember.computed('notes.@each.edit', () =>
                notes.filterBy('edit', true).get('length')
            )
        };
    }
});
