const provinces = require('../data/provinces')

const Provinces = class {
  constructor(id){
    this.id = id
  }

  static getAllProvinces() {
    return provinces
  }

  static getProvinceById() {
    return provinces.find(({id}) => id === this.id)
  }

}


module.exports = {
  Provinces,
};
