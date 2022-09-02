const cities = require('../data/cities')
const { removeAccents } = require('../utils/removeAccents')

const Cities = class {
  constructor(name){
    this.name = name
  }

  static getAllCities() {
    return cities
  }

  static getCityByName(name) {
    const lowercaseName = name.toLowerCase()
    const nameWithNoAccents = removeAccents(lowercaseName)
    return cities.find(city => city.id === nameWithNoAccents)
  }

}

module.exports = {
  Cities,
};
