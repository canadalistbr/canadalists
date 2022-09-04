const cities = require('../data/cities')
const { normalizeEntityName } = require('../utils/removeAccents')

const Cities = class {
  constructor(name){
    this.name = name
  }

  static getAllCities() {
    return cities
  }

  static getCityByName(name) {
    return cities.find(city => city.id === normalizeEntityName(name))
  }

}

module.exports = {
  Cities,
};
