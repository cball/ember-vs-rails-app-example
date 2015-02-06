import Ember from 'ember';

export default Ember.Controller.extend({

  unreadMessageCount: function() {
    return this.get('model.messages.length');
  }.property('model.messages.length'),

  showUnreadCount: Ember.computed.gt('unreadMessageCount', 0)
});
