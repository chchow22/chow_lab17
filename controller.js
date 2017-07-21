var app = angular.module("myModule");

app.controller("myController", function($scope, myService){
  myService.setReddit();
  $scope.getPosts = function() {
    $scope.posts = myService.getReddit();
  }
});
