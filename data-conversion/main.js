
console.log(String(123)); // Explicit conversion from number to string

let num = 123;
let str = String(num); // Explicit conversion from number to string 
console.log(typeof str); // "string"

console.log(str); // "123"

// using ToString() method

let num1 = 420;

let str2 =  num1.toString()

console.log(typeof str2); // "string"
console.log(str2); // "123"

let bool = true;
console.log(String(bool)); // Explicit conversion from boolean to string

console.log(typeof String(true)); // "string"

// converting to Number

let actualString = "456";
let actualNumber = Number(actualString); // Explicit conversion from string to number
console.log(typeof actualNumber); // "number"
console.log(actualNumber); // 456

// using parseInt() method
let newSteing = "899"
let newNumber = parseInt(newSteing)

console.log(typeof newNumber); // "number"
console.log(newNumber); // 899


console.log("Converting float into other use cases.")

let floatNumber = "3.14";

let floatStringCase = "3.14 meters"

console.log(parseFloat(floatNumber)); // 3.14
console.log(typeof parseFloat(floatNumber)); // "number"
console.log(floatNumber.Number); // NaN (Not a Number)
console.log(parseFloat(floatStringCase)); // 3.14

console.log("Converting to Boolean")

let boolString = "true";
console.log(Number(boolString)); // NaN (Not a Number)
