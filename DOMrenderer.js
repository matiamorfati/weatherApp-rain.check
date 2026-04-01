import { getIcon } from "./icons.js";

export const DOMrender = (() => {
  const DOMelements = {
    banner: document.getElementById("weather-output"),
    hourlyGrid: document.getElementById("hourly-grid"),
    dailyGrid: document.getElementById("daily-grid"),
    backgroundImg: document.getElementById("background-img"),
    cityList: document.getElementById("listed-cities"),
    searchBar: document.getElementById("search-div"),
  };

  function MainSearchedWeather(weatherData) {
    WeatherBanner(weatherData);
    HourlyWeather(weatherData);
    DailyWeather(weatherData);
    Background(weatherData.description);
  }

  function HourlyWeather(weatherData) {}

  function DailyWeather(weatherData) {
    DOMelements.searchBar.innerHTML = "loading";
  }

  function WeatherBanner(weatherData) {
    DOMelements.banner.innerHTML = `
    <div class="main-weather-card-info-container">
              <div class="card-title">Right now in ${weatherData.city}</div>
              <div class="main-weather-temp"> ${weatherData.temp}°C</div>
              <div class="main-weather-card-info">
                <div>Feels like ${weatherData.feelslike}°C</div>
                <div>Humidity is ${weatherData.humidity}%</div>
                <div>Rain check is ${weatherData.rainChance}%</div>
              </div>
            </div>
            <img class="main-weather-icon" src="./src/icons/${getIcon(
              weatherData.icon
            )}" alt="${weatherData.icon} icon"/> 
            </div>
    `;
  }

  function Background(weatherStatus) {}

  function ListedCitiesWeather(listedCitiesWeatherData) {}

  function LoadingAnimation() {}

  function EndLoadingAnimation() {}

  function Error(errorMesage) {}

  function DOMrenderInit(listedCitiesWeatherData, homeCityData) {
    MainSearchedWeather(homeCityData);
    ListedCitiesWeather(listedCitiesWeatherData);
  }

  return {
    DOMrenderInit,
    MainSearchedWeather,
    LoadingAnimation,
    EndLoadingAnimation,
    Error,
    WeatherBanner,
  };
})();
