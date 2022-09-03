const { removeAccents } = require("./removeAccents");

describe("removeAccents", () => {
  it("removes all accents from a string", () => {
    const montreal = "Montréal";
    expect(removeAccents(montreal)).toEqual("Montreal");

    const cremeBrulee = "crème brulée";
    expect(removeAccents(cremeBrulee)).toEqual("creme brulee");
  });
});
