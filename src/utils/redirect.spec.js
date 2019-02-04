import { hardRedirect } from "./redirect";

jest.mock("../services/history");

let setHrefSpy;

describe("redirect", () => {
  beforeEach(() => {
    setHrefSpy = jest.spyOn(global.location, "assign");
  });

  it("Should set location href to url value", () => {
    hardRedirect("http://someUrl.com");
    expect(setHrefSpy).toHaveBeenCalledWith("http://someUrl.com");
  });
});
