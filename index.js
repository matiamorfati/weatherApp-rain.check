import getWeatherData from "./api.js";

console.log("odwaznie lecimy");

async function testAPI(city) {
  const APIresponse = await getWeatherData(city);
  console.log(APIresponse);
}

testAPI("Krakow");
