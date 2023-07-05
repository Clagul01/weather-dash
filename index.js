const APIkey = "a32eea740198fe4391cf5e1a7c77e615";
let cityName = "";
let temperature = "";
let currentWeather = "";
let windSpeed = "";


const button = document.getElementById('search-button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    cityName = document.querySelector('#search-input').value;
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey;
    async function fetchText() {
        let response = await fetch(queryURL);
        let data = await response.json();
        console.log(data);
        let temperature = data.main.temp - 273.15 + " degrees celcius";
        let currentWeather = data.weather[0].description;
        let windSpeed = data.wind.speed + " mph";
        console.log(temperature);
        console.log(currentWeather);
        console.log(windSpeed);
    }
    fetchText();
});