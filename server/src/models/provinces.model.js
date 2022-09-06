const db = require("../utils/database");

const Provinces = class {
  constructor(name) {
    this.name = name;
  }

  static getAllProvinces() {
    return db.execute("SELECT * FROM provinces");
  }

  static getProvinceByName(name) {
    return db.execute(`SELECT * FROM provinces WHERE provinces.id = ?`, [name]);
  }
};

module.exports = {
  Provinces,
};
