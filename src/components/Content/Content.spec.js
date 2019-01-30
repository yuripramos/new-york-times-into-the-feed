import React from "react";

import { shallow } from "enzyme";

import Content from "./Content";

it("should match snapshot", () => {
  expect(shallow(<Content />)).toMatchSnapshot();
});
