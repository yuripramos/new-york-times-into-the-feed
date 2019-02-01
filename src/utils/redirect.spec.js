import { redirect, hardRedirect } from "./redirect";

jest.mock("../services/history");
const historyMock = require("../services/history");

let setHrefSpy;
let historySpy;

describe("redirect", () => {
  beforeEach(() => {
    setHrefSpy = jest.spyOn(global.location, "assign");
  });

  it("Should set location href to url value", () => {
    hardRedirect("http://someUrl.com");
    expect(setHrefSpy).toHaveBeenCalledWith("http://someUrl.com");
  });
});

describe("hardRedirect", () => {
  beforeEach(() => {
    historySpy = jest.spyOn(historyMock, "push");
  });

  it("Should set call history.push with url value", () => {
    redirect("http://someUrl.com");
    expect(historySpy).toHaveBeenCalledWith("http://someUrl.com");
  });
});
