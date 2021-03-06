var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=803678be5c09e41edab27e747b90f4f3&units=imperial';

module.exports = {
  getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function (res) {
        //debugger;
         if (res.data.cod && res.data.message) {
           throw new Error(res.data.message);
         } else {
           return res.data.main.temp;
         }
      }, function (res) {
         //debugger;
         //throw new Error(res.data.message); //As I am using latest version of axios
         throw new Error("Unable to fetch weather for that location.");
      });
  }
}
