const key = "57ed5e17c20941aabcb144236231811";

async function getWeather(city) {
    const respone = await fetch(`http://api.weatherapi.com/v1/current.json?key=57ed5e17c20941aabcb144236231811&q=${city}`);
    const weather = await respone.json();
    
    displayWeather(weather);

    console.log(weather);
}

function displayWeather(weatherData) {
    const city = document.querySelector("[data-city]");
    const update = document.querySelector("[data-update]");
    const temperature = document.querySelector("[data-temperature]");
    const condition = document.querySelector("[data-condition]");
    const pressure = document.querySelector("[data-pressure]");
    const humidity = document.querySelector("[data-humidity]");
    const wind = document.querySelector("[data-wind]");

    const cityData = weatherData.location.name;
    const updateData = weatherData.current.last_updated;
    const temperatureData = weatherData.current.temp_c;
    const conditionData = weatherData.current.condition.text;
    const pressureData = weatherData.current.pressure_mb;
    const humidityData = weatherData.current.humidity;
    const windData = weatherData.current.wind_kph;

    city.innerText = cityData;
    update.innerText = updateData;
    temperature.innerText = temperatureData + "°";
    condition.innerText = conditionData;
    pressure.innerText = pressureData + "hpa";
    humidity.innerText = humidityData + "%";
    wind.innerText = windData + "km/h";
}

getWeather("London");













// function displayForecast() {

// }


// fetch(`http://api.weatherapi.com/v1/search.json?key=${key}&q=Biels`)
//     .then(respone => respone.json())
//     .then(data => console.log(data))

// fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Warsaw&days=3`)
//     .then(respone => respone.json())
//     .then(data => console.log(data))

// function getWeather(key, type, location) {
//  const respone = await fetch(`http://api.weatherapi.com/v1/${type}?key=${key}&q=${location}`)
// }
