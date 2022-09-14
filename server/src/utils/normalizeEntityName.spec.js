const { removeAccents, removeSpaces, normalizeEntityName } = require("./normalizeEntityName");

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
    const pei = "Prince Edward Island";
    expect(removeSpaces(pei)).toEqual("PrinceEdwardIsland");
  });
});

describe("normalizeEntityName", () => {
  it("normalizes the string to lowercase and remove all accents", () => {
    const pei = "Princè Edward Island";

    expect(normalizeEntityName(pei)).toEqual("princeedwardisland");
  })
})
