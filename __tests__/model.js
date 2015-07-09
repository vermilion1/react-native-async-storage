'use strict';

jest.dontMock('../src/model');

var Model = require('../src/model');
var noop = function() {};

describe('Model', function() {

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
      expect(function() { new Model('', noop) }).toThrow('Invalid data');
      expect(function() { new Model('{a: b}', noop) }).toThrow('Invalid data');
    });

    it('should create save method', function() {
      var saveMock = jest.genMockFunction();
      var model = new Model('{"a": 1, "b": [2]}', saveMock);

      model.save();

      expect(saveMock).toBeCalledWith({a: 1, b: [2]});
    });

    it('should create next id property', function() {
      var model1 = new Model('{}', noop);
      var model2 = new Model('{"1": {}}', noop);
      var model3 = new Model('{"8": {}, "2": {}}', noop);
      var model4 = new Model('{}', noop);

      model4.add([{}, {}, {}, {}]);

      expect(model1.nextId).toBe(0);
      expect(model2.nextId).toBe(2);
      expect(model3.nextId).toBe(9);
      expect(model4.nextId).toBe(4);
    });

  });

  describe('get method', function() {

    beforeEach(function() {
      this.model = new Model('{}', noop);
    });

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
