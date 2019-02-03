import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

let props;

beforeEach(() => {
  props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: ""
      }
    }
  };
});

describe("Header component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Header {...props}/>)).toMatchSnapshot();
  });

});
