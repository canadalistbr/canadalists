//TODO: Add rest of provinces and move it into DB later on
//TODO: Check if minimum wages are up to date.
const provinces = [
  {
    id: "1",
    name: "Alberta",
    capital: "Edmonton",
    languages: ["en"],
    minimumWage: 15,
  },
  {
    id: "2",
    name: "British Columbia",
    capital: "Victoria",
    languages: ["en"],
    minimumWage: 15.65,
  },
  {
    id: "3",
    name: "Manitoba",
    capital: "Winnipeg",
    languages: ["en", "fr"],
    minimumWage: 11.65,
  },
  {
    id: "4",
    name: "New Brunswick",
    capital: "Fredericton",
    languages: ["en", "fr"],
    minimumWage: 11.7,
  },
  {
    id: "5",
    name: "Newfoundland & Labrador",
    capital: "Saint John's",
    languages: ["en"],
    minimumWage: 11.65,
  },
  {
    id: "6",
    name: "Nova Scotia",
    capital: "Halifax",
    languages: ["en"],
    minimumWage: 12.55,
  },
  {
    id: "7",
    name: "Ontario",
    capital: "Ottawa",
    languages: ["en"],
    minimumWage: 14,
  },
  {
    id: "8",
    name: "Prince Edward Island",
    capital: "Charlottetown",
    languages: ["en"],
    minimumWage: 12.85,
  },
  {
    id: "9",
    name: "Quebec",
    capital: "Quebec City",
    languages: ["fr"],
    minimumWage: 13.1,
  },
  {
    id: "10",
    name: "Saskatchewan",
    capital: "Regina",
    languages: ["en"],
    minimumWage: 11.32,
  },
];

module.exports = provinces;
