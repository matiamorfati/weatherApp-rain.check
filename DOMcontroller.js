export function DOMcontrollerInit(handleWeatherFormSubmit) {
  const getWeatherForm = document.getElementById("weather-form");
  const weatherOutput = document.getElementById("weather-output");
  const weatherCitiesList = document.getElementById("weather-list");
  const changeHomeBtn = document.getElementById("change-home-btn");
  const currentHome = document.getElementById("current-home");

  getWeatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    new formData(getWeatherForm).get("location");
    const location = getWeatherForm.sele;
    handleWeatherFormSubmit(e.target.location.value);
  });
}
