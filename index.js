import { getWeatherDataForSearch, getWeatherDataCitiesPreview } from "./api.js";
import { DOMcontrollerInit } from "./DOMcontroller.js";
import { DOMrender } from "./DOMrenderer.js";

DOMcontrollerInit(handleWeatherFormSubmit);

async function handleWeatherFormSubmit(location) {
  try {
    DOMrender.LoadingAnimation();
    const weatherData = await getWeatherDataForSearcha(location);
    DOMrender.MainSearchedWeather(weatherData);
  } catch (error) {
    DOMrender.Error(error);
  } finally {
    DOMrender.EndLoadingAnimation();
  }
}

async function pageInit(homeCity, listedCities) {
  const homeCityData = await getWeatherDataForSearch(homeCity);
  const listedCitiesData = await getWeatherDataCitiesPreview(listedCities);

  DOMrender.DOMrenderInit(listedCitiesData, homeCityData);
}

/* let homeCity = "krakow";
DOMcontrollerInit(handleWeatherFormSubmit);
pageInit();

const weatherData = await getWeatherDataForSearch("ladek zdroj");
DOMrender.WeatherBanner(weatherData);
 */

const homeCity = "Ladek Zdroj";
const listedCities = ["Warsaw", "Gdansk", "Wroclaw", "Katowice", "Krakow"];

pageInit(homeCity, listedCities);
