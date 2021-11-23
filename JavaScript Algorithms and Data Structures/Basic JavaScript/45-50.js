// 45 -
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift()

// 46 
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// 47 - 
const myList = [["jfgjgh", 3], ["5646", 5], ["fdjghjdf", 4], ["jkhdfg", 6], ["kjhfb", 8]];

// 48 - 
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction()

// 49 - 
function functionWithArgs(one, two) {
    console.log(one + two);
}

functionWithArgs(1, 2)
functionWithArgs(7, 9)

// 50 - 
function timesFive(num) {
    return num * 5;
}

const answer = timesFive(5);

timesFive(5)
timesFive(2)
timesFive(0)
