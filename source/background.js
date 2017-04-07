var BG = this;
var callback = function(){
  BG.message="テスト"
  var notification = webkitNotifications.createHTMLNotification('notification.html')
  notification.show();
}
callback();