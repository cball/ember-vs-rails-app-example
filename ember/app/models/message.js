import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  body: DS.attr('string'),
  read: DS.attr('boolean'),
  deleted: DS.attr('boolean'),
  createdAt: DS.attr('date'),

  sender: DS.belongsTo('user'),
  recipient: DS.belongsTo('user'),

  markAsRead: function() {
    if (!this.get('read')) {
      this.set('read', true);
      this.save();
    }
  }
});