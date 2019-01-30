import React from "react";
import { shallow } from "enzyme";

import Routes from "./Routes";

describe("Routes component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Routes />)).toMatchSnapshot();
  });
});
