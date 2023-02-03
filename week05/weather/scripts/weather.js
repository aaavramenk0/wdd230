// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.6371&appid=7cf66b5215db60e56aa4e23f5e4ed5fb&units=imperial';

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

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `Image of weather type`);
    captionDesc.textContent = `${desc}`;
}

getWeather()