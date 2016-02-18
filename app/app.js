'use strict';

// Declare app level module which depends on views, and components
angular.module('SuggestionBox', [
  'ngRoute',
  'SuggestionBox.view1',
  'SuggestionBox.view2',
  'SuggestionBox.home',
  'SuggestionBox.posts',
  'SuggestionBox.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
