
// 51 - 
// Declare the myGlobal variable below this line
const myGlobal = 10
function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5
}
// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// 52 - 
function myLocalScope() {
    // Only change code below this line
    const myVar = 'fdgd'
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// 53 - 
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = 'sweater'
    // Only change code above this line
    return outerWear;
}

myOutfit();

// 54 - 
// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();

// 55- 
// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
// Only change code below this line
