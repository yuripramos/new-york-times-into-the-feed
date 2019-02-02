import * as NEWS_API from "../../services/News";

export default () => ({
  topUserStories: async (state, sections) => {
    const topUserStoriesRequest = await NEWS_API.getTopStories(sections);
    return {
      isFilled: topUserStoriesRequest.length > 0,
      FeedArray: topUserStoriesRequest
    };
  },
  filterByType: async (state, FeedArray, contextTitle) => {
    return {
      current: FeedArray.find(e => e.section === contextTitle)
    };
  }
});
