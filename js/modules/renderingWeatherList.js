/** @format */

const getNextDayHTML = (dailyWeather, day) => {
  const nextDayHTML = `<div class="wather_nextdays_day">
        <div class="day_name">${day}</div>
        <div class="day_wather_img">
          <img
            src="http://openweathermap.org/img/w/${dailyWeather.weather[0].icon}.png"
            alt="Weather icon"
          />
        </div>
        <div class="day_wather_status">
          ${dailyWeather.weather[0].description}
        </div>
        <div class="day_temperature">
          <p>${dailyWeather.temp.max}°C</p>
          <p>${dailyWeather.temp.min}°C</p>
        </div>
      </div>`;
  return nextDayHTML;
};
const getDaysofWeek = (lenght) => {
  const daysOfWeek = [];
  const today = new Date();

  for (let i = 0; i < lenght; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    const dayOfWeek = nextDay.toLocaleDateString('en-US', { weekday: 'short' });
    daysOfWeek.push(dayOfWeek);
  }
  return daysOfWeek;
};
export const renderWeatherList = (weather, daysList, lenght) => {
  const dayList = getDaysofWeek(lenght);
  daysList.innerHTML = '';
  for (let i = 0; i < lenght; i++) {
    daysList.innerHTML =
      daysList.innerHTML + getNextDayHTML(weather.daily[i], getDaysofWeek(lenght)[i]);
  }
};