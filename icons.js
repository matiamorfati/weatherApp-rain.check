const iconMap = {
  "clear-day": "clear-day.svg",
  "clear-night": "clear-night.svg",

  "partly-cloudy-day": "cloudy-1-day.svg",
  "partly-cloudy-night": "cloudy-1-night.svg",

  cloudy: "cloudy.svg",

  fog: "fog.svg",

  wind: "wind.svg",

  rain: "rainy-1.svg",

  snow: "snowy-1.svg",

  sleet: "snow-and-sleet-mix.svg",

  hail: "hail.svg",

  thunderstorm: "thunderstorms.svg",
  thunderstorms: "thunderstorms.svg",

  "rain-snow": "rain-and-snow-mix.svg",
  "rain-sleet": "rain-and-sleet-mix.svg",

  "showers-day": "rainy-2-day.svg",
  "showers-night": "rainy-2-night.svg",

  "snow-showers-day": "snowy-2-day.svg",
  "snow-showers-night": "snowy-2-night.svg",

  default: "cloudy.svg",
};

export function getIcon(APIweatherStatus) {
  return iconMap[APIweatherStatus] || iconMap["default"];
}
