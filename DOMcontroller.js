export function DOMcontrollerInit(handleWeatherFormSubmit) {
  const getWeatherForm = document.getElementById("weather-form");
  const weatherOutput = document.getElementById("weather-output");
  const weatherCitiesList = document.getElementById("weather-list");
  const changeHomeBtn = document.getElementById("change-home-btn");
  const currentHome = document.getElementById("current-home");

  getWeatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const location = formData.get("location");
    handleWeatherFormSubmit(e.target.location.value);
  });
}
