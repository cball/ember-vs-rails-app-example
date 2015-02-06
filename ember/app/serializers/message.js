import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  typeForRoot: function(root) {
    if (/recipients|senders/.test(root)) {
      return 'user';
    }
    else {
      return this._super(root);
    }
  }
});
