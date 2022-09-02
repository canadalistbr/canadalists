const provinces = require("../data/provinces");
const { normalizeEntityName } = require("../utils/removeAccents");

const Provinces = class {
  constructor(name) {
    this.name = name;
  }

  static getAllProvinces() {
    return provinces;
  }

  static getProvinceByName(name) {
    return provinces.find((province) => province.id === normalizeEntityName(name));
  }
};

module.exports = {
  Provinces,
};
