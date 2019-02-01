import * as NEWS_API from "../../services/News";

export default () => ({
  topUserStories: async (state, sections) => {
    const topUserStoriesRequest = await NEWS_API.getTopStories(sections);
    if (topUserStoriesRequest.length > 0) {
      return {
        isFilled: topUserStoriesRequest.status === 200,
        scienceFeed: topUserStoriesRequest.find(e => e.section === "science"),
        technologyFeed: topUserStoriesRequest.find(
          e => e.section === "technology"
        ),
        healthFeed: topUserStoriesRequest.find(e => e.section === "health"),
        politicsFeed: topUserStoriesRequest.find(e => e.section === "politics"),
        worldFeed: topUserStoriesRequest.find(e => e.section === "world")
      };
    }
  },
  clearSearch: () => {
    return {
      search: {},
      isTimeMachineActive: false
    };
  }
});
