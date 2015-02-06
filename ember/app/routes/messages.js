import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var existingMessages = this.store.all('message')

    if (Ember.isEmpty(existingMessages)) {
      var user = this.modelFor('application');
      existingMessages = user.get('messages');
    }
    return existingMessages;
  }
});