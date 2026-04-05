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

function processWeatherDataForSearched(data) {
  return {
    city: data.resolvedAddress,
    temp: data.currentConditions.temp,
    description: data.currentConditions.conditions,
    feelslike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    rainChance: data.currentConditions.precipprob,
    icon: data.currentConditions.icon,
    hourly: data.days[0].hours,
    daily: data.days,
  };
}

function processWeatherDataForCitiesPreview(data) {
  return {
    city: data.resolvedAddress,
    temp: data.currentConditions.temp,
    icon: data.currentConditions.icon,
  };
}

async function getWeatherDataForSearch(city) {
  try {
    const rawData = await fetchWeather(city);
    return processWeatherDataForSearched(rawData);
  } catch (error) {
    console.error("error while fetching searched/home city", error);
    return null;
  }
}

async function getWeatherDataCitiesPreview(cities) {
  try {
    const promises = cities.map((city) => fetchWeather(city));
    const resolvedPromises = await Promise.allSettled(promises);

    const previewData = resolvedPromises
      .filter((result) => result.status === "fulfilled")
      .map((result) => processWeatherDataForCitiesPreview(result.value));

    return previewData;
  } catch (error) {
    console.error("error while fetching cities preview", error);
    return [];
  }
}

export { getWeatherDataForSearch, getWeatherDataCitiesPreview };
