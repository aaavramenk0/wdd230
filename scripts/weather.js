const weatherType = document.getElementById('weather-type')
const weatherTemp = document.getElementById('weather-temp')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.9245&lon=-84.8378&appid=7cf66b5215db60e56aa4e23f5e4ed5fb'

async function getWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json(); 
            displayResults(data);
            console.log(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

getWeather()