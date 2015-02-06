import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  body: DS.attr('string'),
  read: DS.attr('boolean'),
  deleted: DS.attr('boolean'),
  created_at: DS.attr('date'),

  sender: DS.belongsTo('user'),
  recipient: DS.belongsTo('user')
});