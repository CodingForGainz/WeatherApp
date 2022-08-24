import { dataManagement } from './data-management';

async function retrieveData(city, country, unitSystem) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5df5c999c0258327ce5af181da97e8a9&units=${unitSystem}`;
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    dataManagement(weatherData);
  } catch (error) {
    output.innerHTML =
      "We couldn't find this city. Please, make sure of the following:<ul><li>City name is spelled correctly.</li><li>Country uses only Initials i.e. Costa Rica = CR.</li><li>There are no numbers in your inputs.</li></ul>";
  }
}

export { retrieveData };
