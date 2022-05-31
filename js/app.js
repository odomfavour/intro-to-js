
document.write('Hello World')
document.querySelector('.first').textContent = 'Welcome Obumneme'

document.write("Hello World");
        // alert("Hello World");
    
     console.log("Hello Loveth");

function greeting() {
    alert("Hello Everyone");
}

let name = "Obumneme";
name = "John";
console.log(name);

const PI = 3.14;

let modulo = 11 % 5;
console.log(modulo);

let myName = "Obumneme";
let myAge = "20";
let myHeight = "5.8";
let state = "Lagos";

// let sentence = "My name is " + myName + " and I am " + myAge + " years old. I am " + myHeight + " feet tall and live in " + state + ".";
let sentence = `My name is ${myName} and I am ${myAge} years old. I am ${myHeight} feet tall and live in ${state}.`;
console.log(sentence);

let greaterThan = 5 > 2;
console.log(greaterThan);

let same = 5 == "5";
console.log(same);

let notSame = 5 !== "5";
console.log(notSame);

if(5 > 2 || 5 < 10) {
    console.log("True");
}

// console.log('5' > 2);
let age = 20; // number
let personName = "John"; // string
let isStudent = true; // boolean
let nothing = null; // null
let nothing2 = undefined; // undefined
let nothing3 = NaN; // not a number
let nothing4 = Infinity; // infinity
let cars = ["BMW", "Audi", 12]; // array
console.log(cars[2]);
let carIndex = cars.indexOf("BMW");

// let carIndex = cars.findIndex(function(car) {
//     console.log(car);
//     return car === "BMW";
// });
console.log(carIndex);

let car = {
    brand: "BMW",
    model: "X5",
    year: 2019
}

console.log(car["year"]);

// function add(a, b, c) {
//     return( a + b);
// }

// let add = (a, b, c) => {
//     return( a + b);
// }

// add, mul, divison;

// function add(a, b) {
//     return( a + b);
// }

 
// function mul(a, b) {
//     return (a * b);
// }

// function genCalc(a, b, c) {
   
   
    
//     function divison(a, b) {
//         return (a / b);
//     }
// }



// console.log(add(5, 10,));

function quadratic(a, b, c) {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    console.log(x1, x2);
    return [x1, x2];
}

// console.log(quadratic(1, -4, 2));

let a  = prompt("Enter a");
let b = prompt("Enter b");
let c = prompt("Enter c");

let quadBtn = document.querySelector(".quad-btn");
quadBtn.addEventListener("click", quadratic(a, b, c));






