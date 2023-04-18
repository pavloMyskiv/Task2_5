/** @format */

import { getCityCoordinates, getCityWather } from './modules/fetchFunctions.js';
import {
  mapCurrentWeather,
  setElementById,
} from './modules/renderingFunctions.js';
import { renderWeatherList } from './modules/renderingWeatherList.js';

const daysListLenght = 7;
const APIData = {
  APIKey: 'aca7cae3a796904d4e5b96e361f939db',
  APIWather: {
    adress: 'https://api.openweathermap.org/data/3.0/onecall?',
    units: 'metric',
  },
  APICoordinates: {
    adress: 'http://api.openweathermap.org/geo/1.0/direct?',
    limit: '1',
  },
};

const form = document.querySelector('form');
const input = document.querySelector('input');
const locationSelected = document.querySelector('#location_selected');
const weatherNextdays = document.getElementById('weather_nextdays');

async function renderWidget() {
  let cityCoordinates = await getCityCoordinates(APIData, input.value);

  if (cityCoordinates.length == 0) {
    setElementById('location_selected', 'Entered location is not valid');
    locationSelected.classList.add('error');
  } else {
    locationSelected.classList.remove('error');
    const coordinates = cityCoordinates[0];
    setElementById(
      'location_selected',
      `${coordinates.name}, ${coordinates.state}, ${coordinates.country}`
    );
    let weather = await getCityWather(
      APIData,
      coordinates.lon,
      coordinates.lat
    );
    mapCurrentWeather(weather);
    renderWeatherList(weather, weatherNextdays, daysListLenght);
  }
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderWidget();
});
