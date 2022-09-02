const cities = require('../data/cities')

const Cities = class {
  constructor(name){
    this.name = name
  }

  static getAllCities() {
    return cities
  }

  static getCityByName(name) {
    return cities.find(city => city.id === name)
  }

}

module.exports = {
  Cities,
};
