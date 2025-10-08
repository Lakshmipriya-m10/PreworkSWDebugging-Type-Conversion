
// Explicitly convert "5" to a number to make the subtraction clear and intentional
let result = Number("5") - 2;
console.log("The result is: " + result); // Output: The result is: 3

// "false" (as a string) is truthy, so Boolean("false") returns true. This can be confusing.
// To handle this correctly, check for actual boolean or use string comparison if needed
let isValid = ("false" === "true"); // This will be false
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid."); // Correct output
}

// Convert age to a number before performing addition
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge); // Output: Total Age: 30

//Implicit type conversion example
let implicitResult = "10" * 2; // JavaScript automatically converts "10" to number
console.log("Implicit conversion ('10' * 2):", implicitResult); // 20
console.log("Type of result:", typeof implicitResult); // number

//Edgecase Nan
let badNumber = "abc" * 2; // "abc" can't be converted to a number
console.log("Implicit conversion ('abc' * 2):", badNumber); // NaN
console.log("Type of result:", typeof badNumber); // number (but it's NaN)


//Explicit type converion example
let value = null;
let explicitNumber = Number(value);
console.log("Explicit conversion Number(null):", explicitNumber); // 0
console.log("Type of result:", typeof explicitNumber); // number
