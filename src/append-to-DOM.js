import windIcon from './winds.png';
import countryIcon from './country.png';
import feelsIcon from './feels.png';
import humidityIcon from './humidity.png';
import cloudsIcon from './clouds.png';
import dateIcon from './date.png';
import cityIcon from './city.png';
import weatherIcon from './weather.png';
import tempIcon from './temp.png';
import _ from 'lodash';
import { getDate } from 'date-fns';
import format from 'date-fns/format';

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

  appendtoDOM(`${setDate()}`, 'Date', true, dateIcon);
  appendtoDOM(`${location.city}`, 'City', true, cityIcon);
  appendtoDOM(`${location.coutry}`, 'Country', false, countryIcon);
  appendtoDOM(
    `${location.feels_like} ${tempUnits}`,
    'Feels like',
    false,
    feelsIcon
  );
  appendtoDOM(`${location.humidity}%`, 'Humidity', false, humidityIcon);
  appendtoDOM(
    `${_.capitalize(location.weather)}`,
    'Weather',
    true,
    weatherIcon
  );
  appendtoDOM(`${location.wind} ${speedUnits}`, 'Wind Speed', false, windIcon);
  appendtoDOM(
    `${location.temperature} ${tempUnits}`,
    'Temperature',
    true,
    tempIcon
  );
  appendtoDOM(`${location.clouds}%`, 'Cloudiness', false, cloudsIcon);
}

function appendtoDOM(data, title, main, icon) {
  const statContainer = document.createElement('div');
  const statInfo = document.createElement('div');
  const statTitle = document.createElement('div');
  const iconContainer = document.createElement('div');

  iconContainer.setAttribute('class', 'iconContainer');

  // statInfo.setAttribute('id', data);
  statInfo.setAttribute('class', 'info');

  // statTitle.setAttribute('id', title);
  statTitle.setAttribute('class', 'title');

  statContainer.setAttribute('class', 'data');
  statContainer.setAttribute('id', title);
  statInfo.innerHTML = data;
  statTitle.innerHTML = `${title}: `;

  const statIcon = new Image();
  statIcon.src = icon;

  statIcon.setAttribute('class', 'statIcon');
  iconContainer.appendChild(statIcon);
  statContainer.appendChild(statInfo);
  statContainer.appendChild(statTitle);
  statContainer.appendChild(iconContainer);
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
  iconContainer.setAttribute('id', 'weatherIcon');
  let url = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  const weatherIcon = new Image();
  weatherIcon.src = url;
  iconContainer.appendChild(weatherIcon);
  mainOutput.appendChild(iconContainer);
}

function setDate() {
  const date = new Date();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[date.getMonth()];

  const hours = date.getHours();
  const day = getDate(date);
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  return ` ${hours}:${minutes} <br> ${day} /${month} /${year}`;
}

export { appendtoDOM, displayData, appendIcon };
