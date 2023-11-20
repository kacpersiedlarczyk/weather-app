const key = "57ed5e17c20941aabcb144236231811";

async function getWeather(city) {
    const respone = await fetch(`http://api.weatherapi.com/v1/current.json?key=57ed5e17c20941aabcb144236231811&q=${city}`)
    const weather = await respone.json();

    console.log(weather);
    
    displayWeather(weather);
}   

getWeather("Warsaw");





// function displayWeather(weatherData) {
//     const temp = document.querySelector(".temperature");
//     const img = document.querySelector(".img")

//     temp.innerText = `${weatherData.current.temp_c}C`
//     img.src = weatherData.current.condition.icon
// }


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
