const provinces = require('../data/provinces')

const Provinces = class {
  constructor(name){
    this.name = name
  }

  static getAllProvinces() {
    return provinces
  }

  static getProvinceByName() {
    return provinces.find(({name}) => name === this.name)
  }

}


module.exports = {
  Provinces,
};
