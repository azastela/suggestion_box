'use strict';

// Declare app level module which depends on views, and components
angular.module('SuggestionBox', [
  'LocalStorageModule',
  'ngRoute',
  'SuggestionBox.services',
  'SuggestionBox.view1',
  'SuggestionBox.view2',
  'SuggestionBox.home',
  'SuggestionBox.suggestion',
  'SuggestionBox.version'
]).
config(['$routeProvider', 'localStorageServiceProvider',
  function($routeProvider, localStorageServiceProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
    localStorageServiceProvider.setStorageType('localStorage');
}]);
