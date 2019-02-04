import React from "react";
import { shallow } from "enzyme";

import DefaultContent from "./DefaultContent";
import { black30 } from "../../../styles/settings";
import Icon from "../Icon";

const props = {
  Icon: () => <Icon type="Attention" color={black30} />, // eslint-disable-line
  primaryText: "primary text",
  secondaryTexts: ["text", "more text"]
};

describe("DefaultContent component", () => {
  it("should match snapshot", () => {
    expect(shallow(<DefaultContent {...props} />)).toMatchSnapshot();
  });
});
