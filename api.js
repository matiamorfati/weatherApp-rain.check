import API_KEY from key.js

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
            precip: data.currentConditions.precipprob,
            icon: data.currentConditions.icon
        };

        return weather;
    }
    catch(error) {
        console.error("error from API:", error);
        return null;
    }
}

getWeather('Krakow').then(resolvedPromise => console.log(resolvedPromise))

