export const setElementById = (elementId, value) => {
    const element = document.getElementById(elementId);
    element.innerText = value;
  };
export const mapCurrentWeather = (weatherData) => {
    setElementById('current_temperature', weatherData.current.temp);
    setElementById('current_temperature_feels', weatherData.current.feels_like);
    setElementById(
      'current_day_wather_status',
      weatherData.current.weather[0].main
    );
    setElementById(
      'current_day_wather_description',
      weatherData.current.weather[0].description
    );
    const currentWeatherIcon = document.getElementById('current_day_img');
    currentWeatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png" alt="Current weather icon" />`;
    
  };
 