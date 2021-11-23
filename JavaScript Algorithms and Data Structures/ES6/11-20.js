
// 11 - 
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST

//   12 - 
let a = 8, b = 6;
[a, b] = [b, a];

//   13 - 
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

//   14 - 
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;

//   15 - 
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  return failureItems;
}
const failuresList = makeList(result.failure);

//   16 - 
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};

//   17 - 
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//   18 - 
class Vegetable {
  constructor(name) {
    this.name = name
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//   19 - 
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

20 -
  <script type="module" src="index.js"></script>
