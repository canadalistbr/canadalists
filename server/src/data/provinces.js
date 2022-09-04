//TODO: Add rest of provinces and move it into DB later on
//TODO: Check if minimum wages are up to date.
const provinces = [
  {
    id: "alberta",
    name: "Alberta",
    capital: "Edmonton",
    languages: ["en"],
    minimumWage: 15,
  },
  {
    id: "britishcolumbia",
    name: "British Columbia",
    capital: "Victoria",
    languages: ["en"],
    minimumWage: 15.65,
  },
  {
    id: "manitoba",
    name: "Manitoba",
    capital: "Winnipeg",
    languages: ["en", "fr"],
    minimumWage: 13.50,
  },
  {
    id: "newbrunswick",
    name: "New Brunswick",
    capital: "Fredericton",
    languages: ["en", "fr"],
    minimumWage: 13.75,
  },
  {
    id: "newfoundland&labrador",
    name: "Newfoundland & Labrador",
    capital: "Saint John's",
    languages: ["en"],
    minimumWage: 13.70,
  },
  {
    id: "novascotia",
    name: "Nova Scotia",
    capital: "Halifax",
    languages: ["en"],
    minimumWage: 13.60,
  },
  {
    id: "ontario",
    name: "Ontario",
    capital: "Ottawa",
    languages: ["en"],
    minimumWage: 15.50,
  },
  {
    id: "princewdwardisland",
    name: "Prince Edward Island",
    capital: "Charlottetown",
    languages: ["en"],
    minimumWage: 13.70,
  },
  {
    id: "quebec",
    name: "Quebec",
    capital: "Quebec City",
    languages: ["fr"],
    minimumWage: 14.25,
  },
  {
    id: "saskatchewan",
    name: "Saskatchewan",
    capital: "Regina",
    languages: ["en"],
    minimumWage: 13.00,
  },
];

module.exports = provinces;
