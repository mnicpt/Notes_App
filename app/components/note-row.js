import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['note_row'],
    classNameBindings: ['selected'],
    note: null,
    editMode: false,
    selected: Ember.computed.alias('note.selected'),

    actions: {
        select() {
            this.get('selectNote')(this.get('note'));
            this.set('selected', true);
        },
        edit() {
            this.toggleProperty('note.edit');
        }
    }
});
