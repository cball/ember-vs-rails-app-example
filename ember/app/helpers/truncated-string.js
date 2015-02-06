import Ember from 'ember';

export function truncatedString(input, options) {
  var length = options.hash.length || 100;

  return input.substring(0, 100).substring(0, length)
}

export default Ember.Handlebars.makeBoundHelper(truncatedString);
