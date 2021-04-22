import {createCard, removeCard} from './dom-manipulation';

async function fetchWeather(search){
    
try {
    const response = await fetch(`http://api.weatherbit.io/v2.0/current?key=9d79f0dae0494f8f89edd9f03706c15c&city=${search}`,
     { mode: "cors" });
     
     const weather = await response.json();

     console.log(weather.data[0]);
     removeCard();

     createCard(
        weather.data[0].city_name, 
        weather.data[0].temp, 
        weather.data[0].rh, 
        weather.data[0].weather.description, 
        weather.data[0].weather.icon);
}
catch (error) {
        alert("Error:" + error)
}

}


function searchCity() {
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    
    button.addEventListener('click', () => {
        fetchWeather(input.value);
    });
}

export default searchCity;