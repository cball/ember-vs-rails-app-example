import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    didTransition: function() {
      var message = this.controller.get('model');
      message.markAsRead();
    }
  }
});
