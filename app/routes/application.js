import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var notes = this.get('store').peekAll('note');

        return {
            notes: notes,
            selectedNote: Ember.computed('notes.@each.selected', () => 
                notes.findBy('selected', true)
            )
        };
    },

    redirect() {
        this.transitionTo('notes');
    }
});
