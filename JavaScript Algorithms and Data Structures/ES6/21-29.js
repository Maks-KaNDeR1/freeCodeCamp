
// 21 - 
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString }

// 22 - 
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// 23 - 
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// 24 - 
export default function subtract(x, y) {
  return x - y;
}

// 25 - 
import subtract from "./math_functions.js"

subtract(7, 4);

// 26 - 
const makeServerRequest = new Promise((resolve, reject) => {
});

// 27 - 
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

// 28 - 
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});

// 29 - 
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});