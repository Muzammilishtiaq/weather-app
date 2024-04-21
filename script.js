// // api data
const APIKEY = "4410c6338dcae13cca990078ffc057c1";
const APIURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");

// data query

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");

async function createapi(city) {
  const response = await fetch(APIURL + city + `&appid=${APIKEY}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").textContent = data.main.humidity + "%";
  document.querySelector(".wind").textContent =
    Math.round(data.wind.speed) + "km/h";
if ('' == input) {
  // document.querySelector(".city").textContent = 'Not Able';
  console.log('not able')
}


  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "image/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "image/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "image/Rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "image/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "image/mist.png";
  }

// css 
document.querySelector('.card').classList.add('hidden')

}
button.addEventListener("click", function () {
  createapi(input.value);
});
