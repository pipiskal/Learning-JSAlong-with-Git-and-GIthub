const geo = navigator.geolocation;

const whereAmI = function (lat, long) {
  return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
};

geo.getCurrentPosition(function success(location) {
  let coords = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };

  let countryInfo = whereAmI(coords.latitude, coords.longitude);

  countryInfo
    .then((info) => {
      let country = info.country;
      return fetch(`https://restcountries.com/v3.1/name/${country}`).then(
        (response) => response.json()
      );
    })
    .then((data) => {
      console.log(data[0]);
      // we can use the information of the country to do whatever we want in here
    });
});
