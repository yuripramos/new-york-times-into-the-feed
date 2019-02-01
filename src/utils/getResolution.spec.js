beforeEach(() => {
  jest.mock("./getResolution");
});

const isResponsive = require("./getResolution").isResponsive;

it("should return true for mobile devices", () => {
  global.innerWidth = 500;
  expect(isResponsive()).toBe(true);
});
