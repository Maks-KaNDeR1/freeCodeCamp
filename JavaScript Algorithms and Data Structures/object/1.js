let dog = {
    name: "Pas",
    numLegs: 7
};


// 2
let dog = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dog.name)
console.log(dog.numLegs)

//3 
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + dog.numLegs + " legs.";
    }
};

dog.sayLegs();