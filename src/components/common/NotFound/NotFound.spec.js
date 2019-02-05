import React from "react";
import { shallow } from "enzyme";

import NotFound from "./NotFound";

describe("NotFound component", () => {
  it("should match snapshot", () => {
    expect(shallow(<NotFound />)).toMatchSnapshot();
  });
});
