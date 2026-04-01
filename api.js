import API_KEY from "./key.js";
/* 
async function getWeather(city) {
    try {
        const response = await fetch(`http,key,city`); //tu poprawic
        const data = await response.json();
        if(!response.ok) throw new Error('unable to download data from API')
        console.log(data);

        const weather = {
            city: data.resolvedAddress,
            temp: data.currentConditions.temp,
            description: data.currentConditions.conditions,
            feelslike: data.currentConditions.feelslike,
            humidity: data.currentConditions.humidity,
            icon: data.currentConditions.icon
        };

        return weather;
    }
    catch(error) {
        console.error("error from API:", error);
        return null;
    }
} */

async function fetchWeather(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&include=current`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("unable to download data from api");

  return response.json();
}

function processWeatherData(data) {
  return {
    city: data.resolvedAddress,
    temp: data.currentConditions.temp,
    description: data.currentConditions.conditions,
    feelslike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    rainChance: data.currentConditions.precipprob,
    icon: data.currentConditions.icon,
  };
}

async function getWeatherData(city) {
  try {
    const rawData = await fetchWeather(city);
    return processWeatherData(rawData);
  } catch (error) {
    console.error("", error);
    return null;
  }
}

export default getWeatherData;
