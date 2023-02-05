const weatherType = document.getElementById('weather-type')
const weatherTemp = document.getElementById('weather-temp');
const weatherIcon = document.getElementById('weatherIcon');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.6371&appid=7cf66b5215db60e56aa4e23f5e4ed5fb&units=imperial'

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

const displayResults = (data) => {
    const placeTempF = data.main.temp;
    const placeTempC = ((placeTempF - 32) * 0.556).toFixed(2);
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc)
    

    weatherTemp.innerText = "Temperature in Dallas, GA: " + placeTempF + "F or " + placeTempC + "C";
    weatherType.innerText = data.weather[0].main
}

getWeather()