// 101 - 
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//   102 - 
const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i <= 10);

103 -
    function sum(arr, n) {
        if (n <= 0) {
            return 0;
        } else {
            return sum(arr, n - 1) + arr[n - 1];
        }
    }

//   104 - 
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

lookUpProfile("Akira", "likes");

//   105 - 
function randomFraction() {

    var result = 0;

    while (result === 0) {
        result = Math.random();
    }

    return result;
}
