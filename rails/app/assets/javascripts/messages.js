$(function(){
  $('.read-message-link').click(markAsRead)
});

var markAsRead = function(event) {
  $(this).addClass('read')
  // decrementUnreadCount()
};

// alternative if not js.erb
// var decrementUnreadCount = function() {
//   var countDiv = $('#unread-count')
//   var count = countDiv.text()
//   count = count - 1
//   countDiv.text(count)
// };
