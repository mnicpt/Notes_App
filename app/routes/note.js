import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').peekRecord('note', params.note_id);
    },

    renderTemplate() {
        this.render('notes-folder');
        this.render({
            outlet: 'detail'
        });
    }
});
