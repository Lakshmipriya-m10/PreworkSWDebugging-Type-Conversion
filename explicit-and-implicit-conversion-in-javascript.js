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


let result = Number("5") - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge); 

/**********************************/

let birthday = Number("3") + 30;
console.log("This is how old I am: " + birthday);

let isHappy = Boolean("false"); 
if (isHappy) {console.log("I am happy!");} 

let years = Number("12"); 
let totalYears = years + 3;
console.log("Total years together: " + totalYears);   


