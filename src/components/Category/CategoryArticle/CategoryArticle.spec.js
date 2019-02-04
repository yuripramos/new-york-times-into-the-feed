import React from "react";
import { shallow, mount } from "enzyme";

import CategoryArticle from "./CategoryArticle";
import { Notice, SubTitle, Clicker } from "./styles";

let props;

beforeEach(() => {
  props = {
    content: [
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
      path: "/science/hot"
    }
  };
});

describe("CategoryArticle Component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<CategoryArticle {...props} />)).toMatchSnapshot();
  });
  it("should warn users about functionality if they are in initial page", () => {
    const wrapper = shallow(<CategoryArticle {...props} />);
    wrapper.setProps({ isMainPage: true });
    wrapper.update();
    expect(wrapper.find(Notice).length).toBe(1);
  });
  it("should NOT warn users about functionality if they are in initial page", () => {
    const wrapper = shallow(<CategoryArticle {...props} />);
    expect(wrapper.find(Notice).length).toBe(0);
  });
  it("should render Subtitle if they are in initial page and the number be equals the lenght of the articles", () => {
    const wrapper = shallow(<CategoryArticle {...props} />);
    wrapper.setProps({ isMainPage: true });
    wrapper.update();
    expect(wrapper.find(SubTitle).length).toBe(2);
  });
  it("should NOT render Subtitle if they are in initial page", () => {
    const wrapper = shallow(<CategoryArticle {...props} />);
    expect(wrapper.find(SubTitle).length).toBe(0);
  });
  it("should NOT render Clicker link if they are in initial page and equals the length of the articles", () => {
    const wrapper = shallow(<CategoryArticle {...props} />);
    wrapper.setProps({ isMainPage: true });
    wrapper.update();
    expect(wrapper.find(Clicker).length).toBe(0);
  });
  it("should render Clicker link if they are in initial page", () => {
    const wrapper = shallow(<CategoryArticle {...props} />);
    expect(wrapper.find(Clicker).length).toBe(2);
  });
});
