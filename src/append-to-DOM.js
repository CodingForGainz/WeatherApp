import { status } from './index';

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

  appendtoDOM('Time: ', Date());
  appendtoDOM(`${location.city}`, 'City: ');
  appendtoDOM(`${location.coutry}`, 'Country: ');
  appendtoDOM(`${location.feels_like} ${tempUnits}`, 'Feels like: ');
  appendtoDOM(`${location.humidity}`, 'Humidity: ');
  appendtoDOM(`${location.weather}`, 'Weather: ');
  appendtoDOM(`${location.wind} ${speedUnits}`, 'Wind Speed: ');
  appendtoDOM(`${location.temperature} ${tempUnits}`, 'Current Temperature: ');
  appendtoDOM(`${location.clouds}%`, 'Cloudiness: ');
}

function appendtoDOM(data, title) {
  const statContainer = document.createElement('div');
  statContainer.setAttribute('id', data);
  statContainer.setAttribute('class', 'data');
  statContainer.innerHTML = title + data;
  console.log(data);
  output.appendChild(statContainer);
}

async function appendIcon(iconId) {
  const iconContainer = document.createElement('div');
  iconContainer.setAttribute('id', 'icon');
  let url = `http://openweathermap.org/img/wn/${iconId}.png`;
  const weatherIcon = new Image();
  weatherIcon.src = url;
  iconContainer.appendChild(weatherIcon);
  output.appendChild(iconContainer);
}

export { appendtoDOM, displayData, appendIcon };
