import { getWeatherDataForSearch, getWeatherDataCitiesPreview } from "./api.js";
import { DOMcontrollerInit } from "./DOMcontroller.js";
import { DOMrender } from "./DOMrenderer.js";

DOMcontrollerInit(handleWeatherFormSubmit);

async function handleWeatherFormSubmit(location) {
  try {
    const weatherData = await getWeatherDataForSearch(location);
    DOMrender.MainSearchedWeather(weatherData);
  } catch (error) {
    DOMrender.Error(error);
  }
}

async function pageInit(homeCity, listedCities) {
  DOMrender.LoadingAnimation();

  const homeCityData = await getWeatherDataForSearch(homeCity);
  DOMrender.DOMrenderInitMain(homeCityData);

  const listedCitiesData = await getWeatherDataCitiesPreview(listedCities);
  DOMrender.DOMrenderInitCities(listedCitiesData);
  DOMrender.EndLoadingAnimation();
}

const homeCity = "Ladek p0Zdroj";
const listedCities = [
  "Warsaw",
  "Gdansk",
  "Wroclaw",
  "Katowice",
  "Krakow",
  "Gliwice",
  "Gdynia",
];

pageInit(homeCity, listedCities);
