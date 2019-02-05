import actions from "./index";

jest.mock("../../services/News.js");


const {
  getTopStories: getTopStoriesAPI
} = require("../../services/News.js");

const getTopStoriesAPIResponse = [
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
    section: "science"
  },
  {
    results: [
      {
        section: "technology",
        abstract: "while ultraviolete fluor",
        url: "http://www.nytimes.com/2019/02/01/science/pink-glow",
        published_date: "2019-02-01T12:42:18-05:00",
        byline: "By VERONIQUE GREENWOOD",
        title: "Flying Squirrels That Glow Pink in the Dark"
      },
      {
        section: "technology",
        abstract: "while usadasltraviolete fluor",
        url: "http://www.nytimes.com/2019/02/01/science/red-glow",
        published_date: "2019-02-01T12:42:16-05:00",
        byline: "By BARBARIAN",
        title: "Pink is the new white"
      }
    ],
    section: "technology"
  }
];

describe("News actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "topUserStories",
      "filterByType",
    ]);
  })

  describe("topUserStories", () => {
    it("Should topUserStories with success", async () => {
      getTopStoriesAPI.mockImplementation(() =>
        Promise.resolve(getTopStoriesAPIResponse)
      );
      const { topUserStories } = actions();

      const response = await topUserStories([
        "science",
        "technology",
        "health",
        "politics",
        "world"
      ]);

      expect(Object.keys(response)).toHaveLength(2);
    });
    it("Should topUserStories with errors", async () => {
      getTopStoriesAPI.mockImplementation(() =>
        Promise.resolve([])
      );
      const { topUserStories } = actions();


      const response = await topUserStories([
        "science",
        "technology",
      ]);

      expect(response).toEqual({
        isFilled: getTopStoriesAPI.length > 0,
        FeedArray: []
      });
    });
  });

});
