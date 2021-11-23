// 81 - 
function abTest(a, b) {
    if (a < 0 || b < 0) {
    return undefined;
  }  
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// 82 - 
let count = 0;

function cc(card) {
   switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }  
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); 

// 83 - 
const myDog = {
    name: "Whiskers",
  legs: 4,
  tails: 1,
  friends: ["Water", "Dogs"]
  
};

// 84 - 
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

const hatValue = testObj.hat;    
const shirtValue = testObj.shirt;  

// 85 - 
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"]; 
var drinkValue = testObj["the drink"]; 
