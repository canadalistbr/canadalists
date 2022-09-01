const cities = require('../data/cities')

const Cities = class {
  constructor(id){
    this.id = id
  }

  static getAllCities() {
    return cities
  }

  static getCityById() {
    return cities.find(({id}) => id === this.id)
  }

}

module.exports = {
  Cities,
};
