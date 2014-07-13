var app = angular.module('producer', []);

app.controller('MainCtrl', function($scope) {
  $scope.doClick = function(){
    var iframe = document.querySelector('iframe');
    console.log(iframe);
    iframe.contentWindow.postMessage('The message to send.','http://localhost:3000/');
    console.log("message sent");
  }

});


window.$JH = {
  foo:  function(){}

}
