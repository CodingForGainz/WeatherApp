// import { alternateUnits } from './data-management';
import { alternateUnits } from './data-management';
import { retrieveData } from './retrieve-data';
import { status } from './index';

function start() {
  status.loaded = true;
  let cityText = city.value;
  let countryText = country.value;
  output.innerHTML = '';
  retrieveData(cityText, countryText, status.system);
}

function changeUnits() {
  output.innerHTML = '';
  let cityText = city.value;
  let countryText = country.value;
  retrieveData(cityText, countryText, alternateUnits(status.system));
}

export { start, changeUnits };
