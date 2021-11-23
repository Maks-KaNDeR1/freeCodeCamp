// 61 - 
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// 62 - 
function testNotEqual(val) {
  if (val !=  99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10); 

// 63 - 
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// 64 - 
function testGreaterThan(val) {
  if (val > 10) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or under";
}

testGreaterThan(10);

// 65 - 
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
  if (val > 10) {  
    return "Over 10";
  }
  return "10 or Under";
}

testGreaterThan(10);
