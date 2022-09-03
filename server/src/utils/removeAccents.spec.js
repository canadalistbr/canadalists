const { removeAccents, removeSpaces } = require("./removeAccents");

describe("removeAccents", () => {
  it("removes all accents from a string", () => {
    const montreal = "Montréal";
    expect(removeAccents(montreal)).toEqual("Montreal");

    const cremeBrulee = "crème brulée";
    expect(removeAccents(cremeBrulee)).toEqual("creme brulee");
  });
});
describe("removeSpaces", () => {
  it("removes all spaces from a string", () => {
    const montreal = "Prince Edward Island";
    expect(removeSpaces(montreal)).toEqual("PrinceEdwardIsland");
  });
});
