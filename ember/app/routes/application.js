import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // harcode 1 as a logged in user for demo app
    return this.store.find('user', 1);
  },

  setupController: function(controller, model) {
    this._super();
    controller.set('messages', model.get('messages'));
  }
});
