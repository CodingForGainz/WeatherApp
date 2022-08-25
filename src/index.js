import './main.css';
import { changeUnits, start } from './start';

const btn = document.getElementById('search');
const city = document.getElementById('city');
const country = document.getElementById('country');
const output = document.getElementById('output');
const outputText = document.getElementById('outputText');
const unitsBtn = document.getElementById('units');

let status = {
  loaded: false,
  system: 'metric',
};

document.body.addEventListener('keydown', (event) => {
  let code = event.key;
  if (code === 'Enter') {
    start();
  }
});

btn.onclick = start();

unitsBtn.onclick = () => {
  if (status.loaded === true) {
    changeUnits();
  } else {
    output.innerHTML = 'Please Search for a city before changing units.';
  }
};

export { status };
//Date, Temperature, Feels like, Humidity, Wind Speed, Chance of Rain, 'Weather State'
