/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

/*let a = "Alice"; //vague variable name, not using camelCase
let b = 5; //vague variable name, not using camelCase
let c = 20; //vague variable name, not using camelCase
let d = a + " bought " + b + " items for $" + c + "."; //vague variable name, not using camelCase 

console.log(d);
*/   
let userName = "Alice"; //previously had vague variable name, not using camelCase
let numberOfItems = 5; //previously had vague variable name, not using camelCase
let totalCost = 20; //previously had vague variable name, not using camelCase
let itemsBought = userName + " bought " + numberOfItems + " items for $" + totalCost + "."; //previously had vague variable name, not using camelCase
let programDescription = "This program calculates the total cost of items bought by a user."; //added additional variable to improve program's functionality
console.log(itemsBought);
console.log(programDescription);