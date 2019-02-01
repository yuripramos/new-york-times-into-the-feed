import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { spy } from "sinon";
import Button from "../common/Button";

const props ={
  handleUserInput: jest.fn(),
  search: {
    city: "brussels"
  },
  clearSearch: jest.fn(),
  isLoading: false,
  isError: false

}
describe("Header component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Header {...props}/>)).toMatchSnapshot();
  });
  it("should call handleConfirmButton", () => {
    spy(Header.prototype, "handleConfirmButton");

    const wrapper = shallow(<Header {...props} />);
    wrapper.find(Button).simulate("click");

    expect(Header.prototype.handleConfirmButton.calledOnce);

    Header.prototype.handleConfirmButton.restore();
  });

});
