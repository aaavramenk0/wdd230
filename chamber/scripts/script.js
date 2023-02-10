document.getElementById('lastModified').innerHTML = 'Last Modification: ' + document.lastModified;

const currentTemperature = document.getElementById('cur-temp');
const currentWeatherType = document.getElementById('cur-type');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=33.9245&lon=-84.8413&appid=7cf66b5215db60e56aa4e23f5e4ed5fb&units=imperial'

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}
const displayWeather = (data) => {
    const placeTempF = data.main.temp; // temp in F
    const placeTempC = ((placeTempF - 32) * 0.556).toFixed(2); // temp in C

    const weatherType = data.weather[0].description
    
    currentTemperature.innerText = placeTempF + "F or " + placeTempC + "C";
    currentWeatherType.innerHTML = weatherType.charAt(0).toUpperCase() + weatherType.slice(1); 
}

getWeather()