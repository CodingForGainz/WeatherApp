import { displayData } from './append-to-DOM';
import { status } from './index';

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
  };

  displayData(location, status.system);
};

function alternateUnits(system) {
  if (system === 'metric') {
    status.system = 'imperial';
  } else {
    status.system = 'metric';
  }
  return status.system;
}

export { dataManagement, alternateUnits };
