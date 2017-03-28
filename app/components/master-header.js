import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['master_header'],
    backButton: false,
    backBtnClass: '',
    editMode: false,
    title: "Notes",
    numSelected: 0,

    didReceiveAttrs() {
        this._super(...arguments);
        if(this.get('backButton')) {
            this.set('backBtnClass', 'back');
        }
    },
    
    actions: {
        back() {
            this.get('back')();
        },
        edit() {
            this.get('edit')();
        }
    }
});
