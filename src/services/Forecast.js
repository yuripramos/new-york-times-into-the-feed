import axios from "axios";
import moment from "moment";

export async function getForwardGeoCode(city) {
  let respArray = [];
  const responseAction = await axios
    .get(
      `
    https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPEN_CAGE_KEY}`
    )
    .then(resp => {
      const updatedCity =
        resp.data.results.length > 1 ? resp.data.results[0] : resp.data.results;
      respArray.push(updatedCity);
      return axios.get(
        `${REVERSE_PROXY}/${API_URL}/${SECRET_KEY}/${
          updatedCity.geometry.lat
        },${updatedCity.geometry.lng}?units=auto`
      );
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error;
    });
    respArray.push(responseAction);
  return respArray;
}

export async function getForecastTimeMachine(lat, lng) {
  let axiosArray = [];

  for (let i = 0; i < 30; i++) {
    axiosArray.push(
      axios.get(
        `${REVERSE_PROXY}/${API_URL}/${SECRET_KEY}/${lat},${lng},${moment()
          .subtract(i + 1, "days")
          .format("X")}?units=auto`
      )
    );
  }

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
