import { dataManagement } from './data-management';

async function retrieveData(city, country, unitSystem) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5df5c999c0258327ce5af181da97e8a9&units=${unitSystem}`;
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    dataManagement(weatherData);
  } catch (error) {
    output.innerHTML =
      "<div id= 'error'> We couldn't find this location. Make sure you spelled the city name Correctly. </div>";
  }
}

export { retrieveData };
