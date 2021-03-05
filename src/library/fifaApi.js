var axios = require("axios");

var ROOT_URL = "https://static.api.nexon.co.kr/fifaonline4/latest/";

export const fifa = (url, callback) => {
  var params = {};

  axios
    .get(ROOT_URL + url, {
      headers: { "Access-Control-Allow-Origin": "*" },
      params: params,
    })
    .then(function (response) {
      if (callback) {
        callback(response);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
