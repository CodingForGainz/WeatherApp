import { appendIcon, displayData } from './append-to-DOM';
import { status } from './index';
import { getHours } from 'date-fns';

const unitsBtn = document.getElementById('units');

const dataManagement = (data) => {
  let location = {
    city: data.name,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    temperature: data.main.temp, //k
    temp_max: data.main.temp_max, //k
    temp_min: data.main.temp_min, //k
    weather: data.weather[0].description,
    wind: data.wind.speed, //m/s
    coutry: data.sys.country,
    clouds: data.clouds.all, //%
    icon: data.weather[0].icon,
  };
  displayData(location, status.system);
  appendIcon(location.icon);
};

function alternateUnits(system) {
  if (system === 'metric') {
    status.system = 'imperial';
    unitsBtn.innerText = 'C';
  } else {
    status.system = 'metric';
    unitsBtn.innerText = 'F';
  }
  return status.system;
}

export { dataManagement, alternateUnits };
