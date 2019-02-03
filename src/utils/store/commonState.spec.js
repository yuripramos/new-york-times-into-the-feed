import commonState from "./commonState";
import { INITIAL_LANGUAGE } from "../i18n";

describe("commonState", () => {
  it("Should return the state", () => {
    expect(commonState).toEqual({
      isFilled: false,
      current: false,
      userInfo: {
        preferredLanguage: INITIAL_LANGUAGE
      },
    });
  });
});
