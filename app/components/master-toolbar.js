import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['toolbar'],
    notes: null,
    singleNote: Ember.computed('notes.length', function() {
        return this.notes.get('length') === 1 ? true : false
    }),
    editMode: false,

    actions: {
        add() {
            this.get('add')();
        },

        delete() {
            this.get('delete')();
        }
    }
});
