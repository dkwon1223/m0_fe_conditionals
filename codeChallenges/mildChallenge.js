/*
    Mild Coding Challenge: 
    
    Write a JavaScript program that defines a variable that stores a 
    Number. The program should print out the String "even" if the Number is even, and the String
    "odd" if the Number is odd. Hint: You may need to do some extra research on the remainder 
    operator (%) to solve this challenge.

    Requirements:
    -Declare a variable that stores a Number
    -Declare a function evenOrOdd with a parameter that passes a Number argument
    -Within the function, use conditional logic to return whether the number is even or odd using modulo operator
    -console.log() the function to test and see if it works

    Pseudocode:
    Declare FUNCTION "evenOrOdd" with parameter "num"
    IF num % 2 is strictly equal to 0, return String "The number is even.""
    ELSE return String "The number is odd."
    CONSOLE.LOG(evenOrOdd(<different test values>))
*/

// Declare function with parameter num
function evenOrOdd(num) {
    // First conditional checks whether the input(num) is a valid input to evaluate
    if (typeof num !== "number") {
        return "Invalid input";
        // Next set of conditionals check whether num is even or odd
    } else {
        if (num % 2 === 0) {
            return "The number is even."
        } else {
            return "The number is odd."
        }
    }
}

// Test to see if function correctly evaluates odd number
console.log(evenOrOdd(7));
// Test to see if function correctly evaluates even number
console.log(evenOrOdd(10));
// Test to see if an invalid input returns the invalid message
console.log(evenOrOdd("fart"));