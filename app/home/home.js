'use strict';

angular.module('SuggestionBox.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', 'suggestions', 'localStorageService',
  function($scope, suggestions, localStorageService) {

    if (localStorageService.get('posts')) {
      $scope.posts = JSON.parse(localStorageService.get('posts'));
    } else {
      $scope.posts = suggestions.posts;
      localStorageService.set('posts', angular.toJson($scope.posts));
    }

    $scope.addSuggestion = function() {

      //if input empty, don't submit
      if(!$scope.title || $scope.title === "") {
        return;
      }

      //push suggestion posts in suggestions.js
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        comments: []
      });

      localStorageService.set('posts', angular.toJson($scope.posts));

      //after submit, clear input
      $scope.title = '';
    };

    $scope.upVote = function(post) {
      post.upvotes++;
    };

}]);