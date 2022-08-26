import windIcon from './winds.png';
import countryIcon from './country.png';
import feelsIcon from './feels.png';
import humidityIcon from './humidity.png';
import cloudsIcon from './clouds.png';
import dateIcon from './date.png';
import cityIcon from './city.png';
import weatherIcon from './weather.png';
import tempIcon from './temp.png';

const output = document.getElementById('output');

function displayData(location, system) {
  let speedUnits = '';
  let tempUnits = '';
  if (system === 'metric') {
    speedUnits = 'm/s';
    tempUnits = 'C';
  } else {
    speedUnits = 'mi/h';
    tempUnits = 'F';
  }

  appendtoDOM(`${location.date}`, 'Date: ', true, dateIcon);
  appendtoDOM(`${location.city}`, 'City: ', true, cityIcon);
  appendtoDOM(`${location.coutry}`, 'Country: ', false, countryIcon);
  appendtoDOM(
    `${location.feels_like} ${tempUnits}`,
    'Feels like: ',
    false,
    feelsIcon
  );
  appendtoDOM(`${location.humidity}%`, 'Humidity: ', false, humidityIcon);
  appendtoDOM(`${location.weather}`, 'Weather: ', true, weatherIcon);
  appendtoDOM(
    `${location.wind} ${speedUnits}`,
    'Wind Speed: ',
    false,
    windIcon
  );
  appendtoDOM(
    `${location.temperature} ${tempUnits}`,
    'Current Temperature: ',
    true,
    tempIcon
  );
  appendtoDOM(`${location.clouds}%`, 'Cloudiness: ', false, cloudsIcon);
}

function appendtoDOM(data, title, main, icon) {
  const statContainer = document.createElement('div');
  const statInfo = document.createElement('div');
  statContainer.setAttribute('id', data);
  statContainer.setAttribute('class', 'data');
  statInfo.innerHTML = title + data;

  const statIcon = new Image();
  statIcon.src = icon;
  statIcon.setAttribute('class', 'statIcon');
  statContainer.appendChild(statIcon);
  statContainer.appendChild(statInfo);
  if (main === false) {
    // output.appendChild(statIcon);
    output.appendChild(statContainer);
  } else if (main === true) {
    // mainOutput.appendChild(statIcon);
    mainOutput.appendChild(statContainer);
  }
}

async function appendIcon(iconId) {
  const iconContainer = document.createElement('div');
  iconContainer.setAttribute('id', 'icon');
  let url = `http://openweathermap.org/img/wn/${iconId}.png`;
  const weatherIcon = new Image();
  weatherIcon.src = url;
  iconContainer.appendChild(weatherIcon);
  mainOutput.appendChild(iconContainer);
}

export { appendtoDOM, displayData, appendIcon };
