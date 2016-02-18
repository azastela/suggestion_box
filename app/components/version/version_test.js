'use strict';

describe('SuggestionBox.version module', function() {
  beforeEach(module('SuggestionBox.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
