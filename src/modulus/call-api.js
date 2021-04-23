import {
  createCard, removeCard, backgroundChange, switchUnit,
} from './dom-manipulation';

const fetchWeather = async (search) => {
  try {
    const responseM = await fetch(`https://api.weatherbit.io/v2.0/current?key=9d79f0dae0494f8f89edd9f03706c15c&city=${search}&units=M`,
      { mode: 'cors' });

    const weatherM = await responseM.json();

    const responseF = await fetch(`https://api.weatherbit.io/v2.0/current?key=9d79f0dae0494f8f89edd9f03706c15c&city=${search}&units=I`,
      { mode: 'cors' });

    const weatherF = await responseF.json();

    removeCard();
    backgroundChange(weatherM.data[0].pod);

    createCard(
      weatherM.data[0].city_name,
      weatherM.data[0].temp,
      weatherF.data[0].temp,
      weatherM.data[0].rh,
      weatherM.data[0].weather.description,
      weatherM.data[0].weather.icon,
      weatherM.data[0].wind_spd,
      weatherF.data[0].wind_spd,
    );

    switchUnit();
  } catch (error) {
    alert(`Error:${error}`);
  }
};

const searchCity = () => {
  const input = document.querySelector('input');
  const button = document.querySelector('button');

  document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      fetchWeather(input.value);
    }
  });

  button.addEventListener('click', () => {
    fetchWeather(input.value);
  });
};

export default searchCity;