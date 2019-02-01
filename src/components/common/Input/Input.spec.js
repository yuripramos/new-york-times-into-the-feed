import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import { InputField } from "./styles";

describe("Input component", () => {
  it("should match snapshot", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with label", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      label: "label"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });
});
