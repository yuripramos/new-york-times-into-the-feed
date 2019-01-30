import commonState from "./commonState";
import { INITIAL_UNIT } from "../i18n";

describe("commonState", () => {
  it("Should return the state", () => {
    expect(commonState).toEqual({
      citiesSearched: [],
      unit: INITIAL_UNIT,
      isTimeMachineActive: false,
      isError: false,
    });
  });
});
