import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
