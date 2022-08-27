import './main.css';
import { changeUnits, start } from './start';

const btn = document.getElementById('search');
const unitsBtn = document.getElementById('units');
const helpBtn = document.getElementById('help');

let status = {
  system: 'metric',
  loaded: false,
};

document.body.addEventListener('keydown', (event) => {
  let code = event.key;
  if (code === 'Enter') {
    start();
  }
});

btn.onclick = start;
helpBtn.onclick = () => {
  alert(
    "If the Country is not the one you typed, try with its abreviation i.e. 'Costa Rica = CR.'"
  );
};
unitsBtn.onclick = changeUnits;

export { status };
//Date, Temperature, Feels like, Humidity, Wind Speed, Chance of Rain, 'Weather State'
