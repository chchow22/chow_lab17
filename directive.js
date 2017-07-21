var app = angular.module("myModule");

app.directive("postInfo", function() {

  return {
    restrict: "AE",
    replace: false,
    templateUrl: "post.html"
  }

});
