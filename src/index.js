'use strict';

var React = require('react-native');
var Model = require('./model');
var {
  AsyncStorage
  } = React;

class ReactNativeAsyncStorage {

  using(model) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(model)
        .then((value) => {
          resolve(new Model(value || "{}", this.save.bind(this, model)));
        })
        .catch((error) => reject(error.message))
    });
  }

  save(model, data) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(model, JSON.stringify(data))
        .then((value) => resolve(value))
        .catch((error) => reject(error.message))
    });
  }

}

module.exports = new ReactNativeAsyncStorage();
