document.getElementById('lastModified').innerHTML = 'Last Modification: ' + document.lastModified;

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.6371&appid=7cf66b5215db60e56aa4e23f5e4ed5fb&units=imperial';
const card = document.getElementById('card');

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    
}

getWeather()