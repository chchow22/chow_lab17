var app = angular.module("myModule");

app.factory("myService", function($http) {
  var redditPosts;

  return {
    setReddit: setReddit,
    getReddit: getReddit
  }

  function setReddit() {
    $http({
    method: 'GET',
    url: 'https://www.reddit.com/r/' + "awww/" + '.json'
    }).then(function successfulCallback(response) {
      console.log(response);
      redditPosts = response.data.data.children;
    });
  }

  function getReddit() {
    return redditPosts;
  }

});
