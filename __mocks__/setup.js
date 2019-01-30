const constantDate = new Date("2010-01-01T01:01:01");

/* eslint no-global-assign:off */
Date = class extends Date {
  constructor() {
    super();
    return constantDate;
  }
};

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

window.__API__ = "";

Object.defineProperty(window.navigator, "userAgent", {
  value: "Fake userAgent"
});

jest.mock("shortid", () => ({
  generate: () => "hash"
}));

import mockAxios from "jest-mock-axios";
export default mockAxios;
