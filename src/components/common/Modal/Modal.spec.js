import React from "react";
import { render } from "enzyme";

import Modal from "./Modal";

describe("Modal component", () => {
  it("should match snapshot with a closed modal", () => {
    expect(render(<Modal />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal", () => {
    const props = {
      modalSettings: {
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with title", () => {
    const props = {
      modalSettings: {
        title: "title",
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with icon", () => {
    const props = {
      modalSettings: {
        icon: "close",
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with description string", () => {
    const props = {
      modalSettings: {
        description: "description",
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with description array", () => {
    const props = {
      modalSettings: {
        description: ["description1", "description2"],
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });
});
