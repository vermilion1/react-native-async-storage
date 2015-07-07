'use strict';

class Model {
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

  get(id) {
    return this.data[id];
  }

  add(entries) {
    if (!Array.isArray(entries)) {
      entries = [entries];
    }

    return entries.map((entry) => {
      var id = entry._id = this.nextId;
      this.data[id] = entry;
      this.nextId += 1;
      return id;
    });
  }

  find() {
    return Object.keys(this.data).map(key => this.data[key]);
  }

}

module.exports = Model;
