'use strict';

angular.module('SuggestionBox.version', [
  'SuggestionBox.version.interpolate-filter',
  'SuggestionBox.version.version-directive'
])

.value('version', '0.1');
