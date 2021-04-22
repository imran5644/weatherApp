async function fetchWeather(){
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const wind = document.getElementById('wind');
    const humid = document.getElementById('humid');

    const response = await fetch(`http://api.weatherbit.io/v2.0/current?key=9d79f0dae0494f8f89edd9f03706c15c&city=${search}`,
     { mode: "cors" });
     
     const weather = await response.json();
     console.log('weather.data[0]');
     city.textContent = weather.data[0].city_name;
     temp.textContent = `temperature: ${weather.data[0].temp};`
     wind.textContent = `wind speed: ${weather.data[0].wind_spd};`
     humid.textContent = `humidity: ${weather.data[0].rh};`
}

function searchCity() {
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        fetchWeather(input.value);
    });
}

export default searchCity;