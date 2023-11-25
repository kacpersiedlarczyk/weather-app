const key = "57ed5e17c20941aabcb144236231811";

async function getWeather(city) {
    const respone = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=57ed5e17c20941aabcb144236231811&q=${city}`
    );
    const weather = await respone.json();

    displayWeather(weather);
    handleWeatherIcon(weather);
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
    temperature.innerText = temperatureData + "°C";
    condition.innerText = conditionData;
    pressure.innerText = pressureData + "hpa";
    humidity.innerText = humidityData + "%";
    wind.innerText = windData + "km/h";
}

function handleWeatherIcon(weather) {
    const conditionCode = weather.current.condition.code;
    const isDay = weather.current.is_day;

    if (isDay) {
        displayWeatherIcon("day", conditionCode);
    } else {
        displayWeatherIcon("night", conditionCode);
    }
}

function displayWeatherIcon(timeOfTheDay, conditionCode) {
    const weatherIcon = document.querySelector("[data-icon]");

    const clouds = [1003, 1006, 1009, 1030, 1135];
    const snow = [
        1114, 1117, 1147, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258,
        1261, 1264,
    ];
    const rain = [
        1063, 1066, 1069, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189,
        1192, 1195, 1198, 1201, 1204, 1207,
    ];

    if (conditionCode === 1000) {
        weatherIcon.src = `./assets/${timeOfTheDay}-clear.png`;
    } else if (clouds.includes(conditionCode)) {
        weatherIcon.src = `./assets/${timeOfTheDay}-clouds.png`;
    } else if (snow.includes(conditionCode)) {
        weatherIcon.src = `./assets/${timeOfTheDay}-snow.png`;
    } else if (rain.includes(conditionCode)) {
        weatherIcon.src = `./assets/${timeOfTheDay}-rain.png`;
    } else {
        weatherIcon.src = `./assets/${timeOfTheDay}-storm.png`;
    }
}

getWeather("London");




const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input");

    getWeather(input.value);
    form.reset()
});

// fetch(`http://api.weatherapi.com/v1/search.json?key=${key}&q=Biels`)
//     .then(respone => respone.json())
//     .then(data => console.log(data))

// fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Warsaw&days=3`)
//     .then(respone => respone.json())
//     .then(data => console.log(data))

// function getWeather(key, type, location) {
//  const respone = await fetch(`http://api.weatherapi.com/v1/${type}?key=${key}&q=${location}`)
// }
