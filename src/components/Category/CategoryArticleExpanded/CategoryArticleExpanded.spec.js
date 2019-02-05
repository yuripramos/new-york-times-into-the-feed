import React from "react";
import { shallow, mount } from "enzyme";

import { spy } from "sinon";
import CategoryArticleExpanded from "./CategoryArticleExpanded";

let props;

beforeEach(() => {
  props = {
    current: [
      {
        section: "science",
        abstract: "while ultraviolete fluor",
        url: "http://www.nytimes.com/2019/02/01/science/pink-glow",
        published_date: "2019-02-01T12:42:18-05:00",
        byline: "By VERONIQUE GREENWOOD",
        title: "Flying Squirrels That Glow Pink in the Dark",
        multimedia: [
          { url: "www.imgfor.be/23213.jpg" },
          { url: "www.imgfor.be/932sdas.jpg" },
          { url: "www.imgfor.be/3JWM3.jpg" },
          { url: "www.imgfor.be/9FSww.jpg" },
          { url: "www.imgfor.be/9FSww.jpg" }
        ]
      },
      {
        section: "science",
        abstract: "while usadasltraviolete fluor",
        url: "http://www.nytimes.com/2019/02/01/science/red-glow",
        published_date: "2019-02-01T12:42:16-05:00",
        byline: "By BARBARIAN",
        title: "Pink is the new white",
        multimedia: [
          { url: "www.imgfor.be/23213.jpg" },
          { url: "www.imgfor.be/932sdas.jpg" },
          { url: "www.imgfor.be/3JWM3.jpg" },
          { url: "www.imgfor.be/9FSww.jpg" },
          { url: "www.imgfor.be/9FSww.jpg" }
        ]
      }
    ],
    isMainPage: false,
    match: {
      path: "/science/hot",
      params: {
        idArticle: "EfS2s"
      }
    },
    openModal: jest.fn()
  };
});

const contentState = {
  section: "science",
  abstract: "while usadasltraviolete fluor",
  url: "http://www.nytimes.com/2019/02/01/science/red-glow",
  published_date: "2019-02-01T12:42:16-05:00",
  byline: "By BARBARIAN",
  title: "Pink is the new white",
  multimedia: [
    { url: "www.imgfor.be/23213.jpg" },
    { url: "www.imgfor.be/932sdas.jpg" },
    { url: "www.imgfor.be/3JWM3.jpg" },
    { url: "www.imgfor.be/9FSww.jpg" },
    { url: "www.imgfor.be/9FSww.jpg" }
  ]
};
describe("CategoryArticleExpanded Component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(<CategoryArticleExpanded {...props} />)
    ).toMatchSnapshot();
  });

  it("should setState to apply the content", () => {
    spy(CategoryArticleExpanded.prototype, "componentDidMount");

    const wrapper = mount(<CategoryArticleExpanded {...props} />);
    wrapper.setState({ content: contentState }, () => {
      wrapper.update();
      expect(
        CategoryArticleExpanded.prototype.componentDidMount.calledOnce
      );
      expect(wrapper.state("content")).toEqual(contentState);
    });

    CategoryArticleExpanded.prototype.componentDidMount.restore();
  });
});
