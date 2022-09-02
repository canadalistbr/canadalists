const provinces = require("../data/provinces");
const { removeAccents } = require("../utils/removeAccents");

const Provinces = class {
  constructor(name) {
    this.name = name;
  }

  static getAllProvinces() {
    return provinces;
  }

  static getProvinceByName(name) {
    const lowerCaseName = name.toLowerCase();
    const nameWithNoAccents = removeAccents(lowerCaseName);
    return provinces.find((province) => province.id === nameWithNoAccents);
  }
};

module.exports = {
  Provinces,
};
