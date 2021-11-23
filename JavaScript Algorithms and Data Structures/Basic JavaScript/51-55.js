
// 51 - 
const myGlobal = 10
function fun1() {
    oopsGlobal = 5
}

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
    const myVar = 'fdgd'
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

// 53 - 
const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = 'sweater'
    return outerWear;
}

myOutfit();

// 54 - 
let sum = 0;

function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

// 55- 
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
