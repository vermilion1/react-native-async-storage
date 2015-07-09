'use strict';

jest.dontMock('../src/model');

var Model = require('../src/model');
var noop = function() {};

describe('Model', function() {

  beforeEach(function() {
    this.model = new Model('{}', noop);
  });

  describe('constructor', function() {

    it('should parse input data', function() {
      var model1 = new Model('{}', noop);
      var model2 = new Model('{"a": 1}', noop);
      var model3 = new Model('{"b": [1, "2"]}', noop);

      expect(model1.data).toEqual({});
      expect(model2.data).toEqual({a: 1});
      expect(model3.data).toEqual({b: [1, '2']});
    });

    it('should throw the error in case input data isn\'t valid', function() {
      expect(function () { new Model('', noop) }).toThrow(new Error('Invalid data'));
      expect(function () { new Model('{a: b}', noop) }).toThrow(new Error('Invalid data'));
    });

    it('should create save method', function() {
      // TODO: add test
    });

    it('should create next id property', function() {
      // TODO: add test
    });

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
