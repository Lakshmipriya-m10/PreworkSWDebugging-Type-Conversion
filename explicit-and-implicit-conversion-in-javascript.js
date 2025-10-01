/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

let ageStr = "25";
let totalAgeNum = Number(ageStr) + 5; // Number("25") => 25; 25 + 5 = 30
console.log("Total Age (explicit Number):", totalAgeNum); // Outputs: 30

// Explicit conversion of "5" to number before subtraction
let result = Number("5") - 2; // Number("5") => 5; 5 - 2 = 3
console.log("The result is:", result); // Outputs: 3

// The string "false" is truthy when used directly in boolean contexts.
// To interpret the string value as a boolean, compare explicitly to "true".
let strBool = "false";
let isValid = (strBool.toLowerCase() === "true"); // only true if the string exactly equals "true"
if (isValid) {
  console.log("This is valid!");
} else {
  console.log("This is NOT valid!");
}

// Demonstrate an edge case: converting a non-numeric string yields NaN
let badNumber = Number("abc");
console.log('Number("abc") =>', badNumber, 'typeof =>', typeof badNumber); // NaN
