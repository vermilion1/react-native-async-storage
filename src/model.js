'use strict';

class Model {

  /**
   * @constructor
   * @param data {string}
   * @param save {function}
   */
  constructor(data, save) {
    try {
      this.data = JSON.parse(data);
    }
    catch (e) {
      throw new Error('Invalid data');
    }

    this.save = () => save(this.data);
    this.nextId = Number(Object.keys(this.data)[0]) || -1 + 1;
  }

  /**
   * @param id {number|string}
   * @returns {Object?} Found entry.
   */
  get(id) {
    return this.data[id];
  }

  /**
   * @param entry {Object|Array<Object>}
   * @returns {number|Array<number>} Added entry id.
   */
  add(entry) {
    var isArray = Array.isArray(entry);
    var entries = isArray ? entry : [entry];
    var ids = entries.map((entry) => {
      var id = entry._id = this.nextId;
      this.data[id] = entry;
      this.nextId += 1;
      return id;
    });

    return isArray ? ids : ids[0];
  }

  /**
   * @param id {number|Object}
   * @param data {Object?}
   * @returns {number} Updated entry id.
   */
  update(id, data) {
    if (data === void 0) {
      data = id;
      id = data._id;
    }

    data._id = id;
    this.data[id] = data;

    return id;
  }

  /**
   * @param id {number|Array<number>}
   * @returns {number|Array<number>} Updated entry id.
   */
  remove(id) {
    var isArray = Array.isArray(id);
    var ids = isArray ? id : [id];
    var data = this.data;

    ids.forEach(function(id) {
      delete data[id];
    });

    return isArray ? ids : id;
  }

  /**
   * @returns {Array<number?>} List of ids.
   */
  clear() {
    var ids = Object.keys(this.data);
    this.data = {};
    return ids;
  }

  /**
   * @param criteria {Object?}
   * @returns {Array<Object?>}
   */
  find(criteria) {
    if (criteria) {

      // TODO: find by some criteria

    }
    return Object.keys(this.data).map(key => this.data[key]);
  }

}

module.exports = Model;
