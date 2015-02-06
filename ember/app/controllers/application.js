import Ember from 'ember';

export default Ember.Controller.extend({
  unreadMessages: Ember.computed.filterBy('messages', 'read', false),

  unreadMessageCount: function() {
    return this.get('unreadMessages.length');
  }.property('unreadMessages.length'),

  showUnreadCount: Ember.computed.gt('unreadMessageCount', 0)
});
