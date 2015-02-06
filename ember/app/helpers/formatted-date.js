import Ember from 'ember';
var { moment } = window;

export function formattedDate(date, options) {
  var format = options.hash.format || 'LL';

  return moment(date).format(format);
}

export default Ember.Handlebars.makeBoundHelper(formattedDate);
