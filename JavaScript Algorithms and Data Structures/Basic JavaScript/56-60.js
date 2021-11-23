
// 56 - 
function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//   57 -
function welcomeToBooleans() {
    return true; 
}

//   58 - 
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

trueOrFalse(true);
trueOrFalse(false);

//   59 - 
function testEqual(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

//   60 - 
function testStrict(val) {
    if (val === 7) { 
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
