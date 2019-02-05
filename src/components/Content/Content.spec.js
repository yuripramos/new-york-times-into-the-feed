import React from "react";

import { spy } from "sinon";
import { shallow, mount } from "enzyme";
import Content from "./Content";

let props;
beforeEach(() => {
  props = {
    FeedArray: [
      {
        results: [
          {
            section: "science",
            abstract: "while ultraviolete fluor",
            url: "http://www.nytimes.com/2019/02/01/science/pink-glow",
            published_date: "2019-02-01T12:42:18-05:00",
            byline: "By VERONIQUE GREENWOOD",
            title: "Flying Squirrels That Glow Pink in the Dark"
          },
          {
            section: "science",
            abstract: "while usadasltraviolete fluor",
            url: "http://www.nytimes.com/2019/02/01/science/red-glow",
            published_date: "2019-02-01T12:42:16-05:00",
            byline: "By BARBARIAN",
            title: "Pink is the new white"
          }
        ],
      },
      {
        results: [
          {
            section: "science",
            abstract: "while ultraviolete fluor",
            url: "http://www.nytimes.com/2019/02/01/science/pink-glow",
            published_date: "2019-02-01T12:42:18-05:00",
            byline: "By VERONIQUE GREENWOOD",
            title: "Flying Squirrels That Glow Pink in the Dark"
          },
          {
            section: "science",
            abstract: "while usadasltraviolete fluor",
            url: "http://www.nytimes.com/2019/02/01/science/red-glow",
            published_date: "2019-02-01T12:42:16-05:00",
            byline: "By BARBARIAN",
            title: "Pink is the new white"
          }
        ],
      }
    ]
  };
});

describe("Content Component", () =>{
  it("should match snapshot", () => {
    expect(shallow(<Content {...props} />)).toMatchSnapshot();
  });

  it("should setState to apply the content", () => {
    spy(Content.prototype, "componentDidMount");
    spy(Content.prototype, "componentWillReceiveProps");

    const wrapper = mount(<Content {...props} />);
    wrapper.setState({ isLoading: false }, () => {
      wrapper.update();
      expect(Content.prototype.componentDidMount.calledOnce);
      expect(Content.prototype.componentWillReceiveProps.calledOnce);
    });

    Content.prototype.componentDidMount.restore();
    Content.prototype.componentWillReceiveProps.restore();
  });
})
