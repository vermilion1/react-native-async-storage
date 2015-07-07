'use strict';

jest.dontMock('../src/model');

var Model = require('../src/model');

describe('Model', function() {

  beforeEach(function() {
    this.model = new Model('{}', function() {});
  });

  describe('get method', function() {

    it('should return entry by its id', function() {
      var ids = this.model.add({});
      var addedId = ids[0];
      var insertedEntry = this.model.get(addedId);

      expect(addedId).toEqual(insertedEntry._id);
    });

  });

});
