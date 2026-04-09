import { getIcon } from "./icons.js";

export const DOMrender = (() => {
  const DOMelements = {
    banner: document.getElementById("weather-output"),
    hourlyGrid: document.getElementById("hourly-grid"),
    dailyGrid: document.getElementById("daily-grid"),
    backgroundImg: document.getElementById("background-img"),
    cityList: document.getElementById("listed-cities"),
    searchBar: document.getElementById("search-div"),
    hourlyLeftBtn: document.getElementById("hourly-left-btn"),
    hourlyRightBtn: document.getElementById("hourly-right-btn"),
  };

  function MainSearchedWeather(weatherData) {
    WeatherBanner(weatherData);
    HourlyWeather(weatherData);
    DailyWeather(weatherData);
    Background(weatherData.description);
  }

  function HourlyWeather(weatherData) {
    const hourlyWeatherData = weatherData.hourly;
    DOMelements.hourlyGrid.innerHTML = hourlyWeatherData

      .map(
        ({ datetime, temp, icon }, index) =>
          `
         <div class="hourly-grid-card ">
              <div class="hour">${
                index == 0 ? "Now" : parseInt(datetime.split(":")[0])
              }</div>
                <img class=".listed-weather-icon" src="./src/icons/${getIcon(
                  icon
                )}" alt="${icon} icon"/> 
              <div class="temperature-hourly">${Math.round(temp)}°C</div>
            </div>
            `
      )
      .join("");
  }

  function DailyWeather(weatherData) {
    DOMelements.dailyGrid.innerHTML = weatherData.daily
      .map(({ datetime, temp, icon }) => {
        const date = new Date(datetime);
        const weekDay = date.toLocaleDateString("en-US", { weekday: "short" });
        return `
            <div class="daily-grid-card">
              <div class="day">${weekDay}</div>
              <img class=".listed-weather-icon" src="./src/icons/${getIcon(
                icon
              )}" alt="${icon} icon"/> 
              <div class="temperature-hourly">${Math.round(temp)}°C</div>
            </div>
            `;
      })
      .join("");
  }

  function WeatherBanner(weatherData) {
    DOMelements.banner.innerHTML = `
    <div class="flex-container-weather" >
      <div class="main-weather-card-info-container">
              <div class="card-title">Right now in<br> ${
                weatherData.city.split(",")[0]
              }</div>
              <div class="main-weather-card-info">
              <div class="main-weather-temp">Temperature: ${
                weatherData.temp
              }°C</div>
                <div>Feels like ${weatherData.feelslike}°C</div>
                <div>Humidity is ${weatherData.humidity}%</div>
              </div>
      </div>
            <img class="main-weather-icon" src="./src/icons/${getIcon(
              weatherData.icon
            )}" alt="${weatherData.icon} icon"/> 
    </div>
            
    `;
  }

  function Background(weatherStatus) {}

  function ListedCitiesWeather(listedCitiesWeatherData) {
    DOMelements.cityList.innerHTML = listedCitiesWeatherData
      .map(
        (cityData) =>
          `
    <div class="listed-place">
            
            <div class="city-name">${cityData.city.split(",")[0]}</div>
            <img class="listed-weather-icon" src="./src/icons/${getIcon(
              cityData.icon
            )}" alt="${cityData.icon} icon"/> 
            <div class="weather-info">${Math.round(cityData.temp)}°C</div>
            
            
    </div>
          `
      )
      .join("");
  }

  function LoadingAnimation() {
    DOMelements.cityList.classList.add("loadingAnim");
  }

  function EndLoadingAnimation() {
    DOMelements.cityList.classList.remove("loadingAnim");
  }

  function DOMrenderInitMain(homeCityData) {
    MainSearchedWeather(homeCityData);

    HourlyWeather(homeCityData);
    DailyWeather(homeCityData);
  }

  function DOMrenderInitCities(listedCitiesWeatherData) {
    ListedCitiesWeather(listedCitiesWeatherData);
  }

  return {
    DOMrenderInitMain,
    DOMrenderInitCities,
    MainSearchedWeather,
    LoadingAnimation,
    EndLoadingAnimation,
    WeatherBanner,
  };
})();
