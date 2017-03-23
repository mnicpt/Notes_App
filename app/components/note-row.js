import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['note_row'],
    note: null,
    editMode: false,
    selected: null,

    actions: {
        select() {
            this.get('selectNote')(this.get('note'));
            this.get('selected')();
        },
        selectEdit() {
            this.toggleProperty('note.edit');
        }
    }
});
