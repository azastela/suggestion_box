'use strict';

angular.module('SuggestionBox.suggestion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/suggestion/:id', {
    templateUrl: 'suggestion/suggestion.html',
    controller: 'SuggestionController'
  });
}])

.controller('SuggestionController', ['$scope', '$routeParams',
  'suggestions', function($scope, $routeParams, suggestions) {
  $scope.post = suggestions.posts[$routeParams.id];

  $scope.addComment = function() {
    if (!$scope.title) {
      return;
    }

    $scope.post.comments.push({
      body: $scope.title,
      upvotes: 0
    });

    $scope.title = '';
  };

  $scope.upVote = function(comment) {
    comment.upvotes++;
  };
}]);