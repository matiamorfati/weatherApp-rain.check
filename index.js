import getWeatherData from "./api.js";
import { DOMcontrollerInit } from "./DOMcontroller.js";
import { DOMrender } from "./DOMrenderer.js";

DOMcontrollerInit(handleWeatherFormSubmit);

async function handleWeatherFormSubmit(location) {
  try {
    DOMrender.LoadingAnimation();
    const weatherData = await getWeatherData(location);
    DOMrender.MainSearchedWeather(weatherData);
  } catch (error) {
    DOMrender.Error(error);
  } finally {
    DOMrender.EndLoadingAnimation();
  }
}

async function pageInit() {
  const homeCityData = await getWeatherData(homeCity);
  const listedCities = {
    Warsaw: await getWeatherData("Warsaw"),
    Wroclaw: await getWeatherData("Wroclaw"),
    Katowice: await getWeatherData("Katowice"),
    Gdansk: await getWeatherData("Gdansk"),
    "Ladek Zdroj": await getWeatherData("Ladek Zdroj"),
  };
  DOMrender.DOMrenderInit(listedCities, homeCityData);
}

/* let homeCity = "krakow";
DOMcontrollerInit(handleWeatherFormSubmit);
pageInit();
 */
const weatherData = await getWeatherData("ladek zdroj");
DOMrender.WeatherBanner(weatherData);

console.log(weatherData);
