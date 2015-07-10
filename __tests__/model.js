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

    beforeEach(function() {
      this.model = new Model('{}', noop);
    });

    it('should add single entry', function() {
      var entry1 = {a: 1};
      var entry2 = {a: 2};

      this.model.add(entry1);
      this.model.add(entry2);

      expect(Object.keys(this.model.data).length).toBe(2);
      expect(this.model.data[0]).toEqual(entry1);
      expect(this.model.data[1]).toEqual(entry2);
    });

    it('should return an id of a single added entry', function() {
      var id0 = this.model.add({a: 1});
      var id1 = this.model.add({a: 2});

      expect(id0).toBe(0);
      expect(id1).toBe(1);
    });

    it('should add multiple entries at once', function() {
      var entries1 = [{a: 1}];
      var entries2 = [{a: 2}, {a: 3}];

      this.model.add(entries1);
      this.model.add(entries2);

      expect(Object.keys(this.model.data).length).toBe(3);
      expect(this.model.data[0]).toEqual(entries1[0]);
      expect(this.model.data[1]).toEqual(entries2[0]);
      expect(this.model.data[2]).toEqual(entries2[1]);
    });

    it('should return ids of a multiple added entries', function() {
      var ids0 = this.model.add([{a: 1}]);
      var ids1 = this.model.add([{a: 2}, {a: 3}]);

      expect(ids0).toEqual([0]);
      expect(ids1).toEqual([1, 2]);
    });

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
