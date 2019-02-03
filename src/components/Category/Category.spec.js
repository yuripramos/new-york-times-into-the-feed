import React from "react";
import { shallow, mount } from "enzyme";

import Category from "./Category";

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
        ]
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
        ]
      }
    ],
    current: {
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
      ]
    },
    match: {
      path: "/science/hot"
    },
    isFilled: true,
    filterByType: jest.fn()
  };
});

describe("Category Component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Category {...props} />)).toMatchSnapshot();
  });
  it("should call filterByType", () => {
    const wrapped = mount(<Category {...props} />);
    expect(wrapped.state()).toEqual({ isLoading: true });
    expect(props.filterByType).toHaveBeenCalled();
  });
});
