
// 106 - 
function randomWholeNum() {
    // Only change code below this line
    return Math.floor(Math.random() * 10);
}

//   107 - 
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
}

//   108 - 
function convertToInteger(str) {
    return parseInt(str);

}

convertToInteger("56");

//   109 - 
function convertToInteger(str) {
    return parseInt(str, 2);

}

convertToInteger("10011");

//   110 - 
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";

}

checkEqual(1, 2);

//   111 - 
function checkSign(num) {
    return num > 0 ? "positive"
        : num < 0 ? "negative"
            : "zero";
}

checkSign(10);

//   112 - 
// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
// Only change code above this line

//   113 - 
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}


