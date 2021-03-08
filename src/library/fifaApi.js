var axios = require("axios");

var ROOT_URL = "/latest/";

export const fifa = (url, callback) => {
  var params = {};

  axios
    .get(ROOT_URL + url, {
      params: params,
    })
    .then(function (response) {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
