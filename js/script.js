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
const weatherNextdays = document.getElementById('wather_nextdays');

async function renderWidget() {
  let coordinates = await getCityCoordinates(APIData, input.value);

  if (coordinates.length == 0) {
    setElementById('location_selected', 'Entered location is not valid');
    locationSelected.classList.add('error');
  } else {
    locationSelected.classList.remove('error');
    setElementById(
      'location_selected',
      `${coordinates[0].name}, ${coordinates[0].state}, ${coordinates[0].country}`
    );
    let weather = await getCityWather(
      APIData,
      coordinates[0].lon,
      coordinates[0].lat
    );
    mapCurrentWeather(weather);
    renderWeatherList(weather, weatherNextdays, daysListLenght);
  }
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderWidget();
});
