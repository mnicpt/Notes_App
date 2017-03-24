import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    date: DS.attr('date'),
    selected: DS.attr('boolean', { defaultValue() { return false; }}),
    edit: DS.attr('boolean'),
    folder: DS.attr('string')
});
