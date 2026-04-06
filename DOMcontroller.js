export function DOMcontrollerInit(handleWeatherFormSubmit) {
  const getWeatherForm = document.getElementById("weather-form");
  const weatherOutput = document.getElementById("weather-output");
  const weatherCitiesList = document.getElementById("weather-list");
  const changeHomeBtn = document.getElementById("change-home-btn");
  const currentHome = document.getElementById("current-home");
  const hourlyLeftBtn = document.getElementById("hourly-left-btn");
  const hourlyRightBtn = document.getElementById("hourly-right-btn");
  const hourlyContainer = document.getElementById("hourly-grid");

  getWeatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const location = formData.get("location");
    handleWeatherFormSubmit(e.target.location.value);
  });

  hourlyLeftBtn.addEventListener("click", () => {
    hourlyContainer.scrollBy({ left: -100, behavior: "smooth" });
  });
  hourlyRightBtn.addEventListener("click", () => {
    hourlyContainer.scrollBy({ left: 100, behavior: "smooth" });
  });
}
