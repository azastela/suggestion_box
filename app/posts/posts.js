'use strict';

angular.module('SuggestionBox.posts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {
    templateUrl: 'posts/posts.html',
    controller: 'PostsController'
  });
}])

.controller('PostsController', ['$scope', function($scope) {
}]);