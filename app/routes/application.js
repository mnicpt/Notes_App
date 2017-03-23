import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var notes = this.get('store').peekAll('note');
        var singleNote = notes.length == 1;

        return {
            notes: notes,
            singleNote: singleNote,
            selectedNote: null,
            editMode: false,
            numSelected: 0
        };
    }
});
