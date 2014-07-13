var app = angular.module('producer', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  console.log("got here man!");
  $scope.doClick = function(){
        console.log("adding items...");
	$scope.items.push($scope.items.length+1);
        $scope.$apply();
  }
  $scope.items = [1,2,3];
  
  
  
  
  $scope.init = function(){
        console.log("init producer");
        var me = this;
        var messageEventHandler = function(event){
            // check that the origin is one we want.

            if(event.origin == 'http://localhost:4000'){
                console.log("message recieved", event);
                me.doClick();
            }
        }
        window.addEventListener('message', messageEventHandler,false);      
  }

});



