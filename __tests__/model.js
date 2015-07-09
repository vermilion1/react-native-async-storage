'use strict';

jest.dontMock('../src/model');

var Model = require('../src/model');

describe('Model', function() {

  beforeEach(function() {
    this.model = new Model('{}', function() {});
  });

  describe('constructor', function() {
      // TODO: add tests
  });

  describe('get method', function() {

    it('should return entry by its id', function() {
      var id = this.model.add({});
      var insertedEntry = this.model.get(id);

      expect(id).toEqual(insertedEntry._id);
    });

  });

  describe('add method', function() {
    // TODO: add tests
  });

  describe('update method', function() {
    // TODO: add tests
  });

  describe('remove method', function() {
    // TODO: add tests
  });

  describe('clear method', function() {
    // TODO: add tests
  });

  describe('find method', function() {
    // TODO: add tests
  });

});
