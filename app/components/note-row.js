import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['note_row'],
    classNameBindings: ['selected'],
    model: null,
    editMode: false,
    selected: Ember.computed.alias('model.selected'),

    actions: {
        select() {
            this.get('selectRow')(this.get('model'));
            this.set('selected', true);
        },
        edit() {
            this.toggleProperty('model.edit');
        }
    }
});
