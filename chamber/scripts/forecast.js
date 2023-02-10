const forecast = document.getElementById('forecast')

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.9245&lon=-84.8413&appid=7cf66b5215db60e56aa4e23f5e4ed5fb&units=imperial';

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}
const displayForecast = (data) => {
    // const placeTempF = data.list[0].main.temp; // temp in F
    // const placeTempC = ((placeTempF - 32) * 0.556).toFixed(2); // temp in C

       
    const firstDay = new Date(data.list[0].dt_txt).getDate() 
    const firstYear = new Date(data.list[0].dt_txt).getFullYear() 
    const firstMonth = new Date(data.list[0].dt_txt).getMonth() + 1
    const firstDate = `${firstMonth}/${firstDay}/${firstYear}`;
    const firstDateTempF = data.list[0].main.temp;
    const secondDay = new Date(data.list[8].dt_txt).getDate() 
    const secondYear = new Date(data.list[8].dt_txt).getFullYear() 
    const secondMonth = new Date(data.list[8].dt_txt).getMonth() + 1
    const secondDate = `${secondMonth}/${secondDay}/${secondYear}`;
    const secondDateTempF = data.list[8].main.temp;
    const thirdDay = new Date(data.list[16].dt_txt).getDate() 
    const thirdYear = new Date(data.list[16].dt_txt).getFullYear() 
    const thirdMonth = new Date(data.list[16].dt_txt).getMonth() + 1
    const thirdDate = `${thirdMonth}/${thirdDay}/${thirdYear}` 
    const thirdDateTempF = data.list[16].main.temp;
    const dates = [firstDate, secondDate, thirdDate]
    const temps = [firstDateTempF, secondDateTempF, thirdDateTempF]
    for (let i = 0; i < dates.length; i++){
        const dayTemp = document.createElement('p').innerText = `${dates[i]} - ${temps[i]}F `;
        
        forecast.append(dayTemp, document.createElement('br'))
    };
}

getForecast()
