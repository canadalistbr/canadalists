const cities = require('../data/cities')

const Cities = class {
  constructor(name){
    this.name = name
  }

  static getAllCities() {
    return cities
  }

  static getCityByName() {
    return cities.find(({name}) => name === this.id)
  }

}

module.exports = {
  Cities,
};
