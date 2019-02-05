import axios from "axios";
export async function getTopStories(sections) {
  let axiosArray = [];
  sections.forEach(e => {
    axiosArray.push(axios.get(`${API_URL}/${e}.json?api-key=${SECRET_KEY}`));
  });

  const responseAction = axios
    .all(axiosArray)
    .then(function(results) {
      let temp = results.map(r => r.data);
      return temp;
    })
    .catch(error => {
      return error.data;
    });

  return responseAction;
}
