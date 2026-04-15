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


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;     // value of age is string so it display output 255 ("25" is string and 5).I explicitly change string to number using Number(age) to fix the error.
console.log("Total Age: " + totalAge);

//implicit type conversion
let result1 = "5" * 5;
console.log("The result is " + result1);

//Explicit type conversion
let number = 15.5;
console.log(parseInt(number));

// Eg.NaN
let str = "Hi";
console.log("Output:Before Conversion = " + str);
console.log("Output:After Conversion = " + Number(str));
