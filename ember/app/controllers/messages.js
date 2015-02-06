import Ember from 'ember';

export default Ember.Controller.extend({
  sortBy: ['createdAt:desc'],
  sortedMessages: Ember.computed.sort('model', 'sortBy'),
});