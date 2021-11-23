
// 66 - 
function testGreaterOrEqual(val) {
    if (val >= 20) {  
        return "20 or Over";
    }
    if (val >= 10) {  
        return "10 or Over";
    }
    return "Less than 10";
}

testGreaterOrEqual(10);

//   67 - 
function testLessThan(val) {
    if (val < 25) {  
        return "Under 25";
    }
    if (val < 55) {  
        return "Under 55";
    }
    return "55 or Over";
}

testLessThan(10);

//   68 - 
function testLessOrEqual(val) {
    if (val <= 12) {  
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessOrEqual(10);

//   69 - 
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);

//   70 - 
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);
