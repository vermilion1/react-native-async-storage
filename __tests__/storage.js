'use strict';

jest.dontMock('../src/model');
jest.dontMock('../src/storage');

jest.setMock('react-native', {});

var Storage = require('../src/storage');

describe('Storage', function() {

  // ...

});
