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
  statContainer.setAttribute('id', 'data');
  statContainer.innerHTML = title + data;
  output.appendChild(statContainer);
}

export { appendtoDOM, displayData };
