/*
    Spicy Coding Challenge: 
    
    Write a JavaScript program that prints out a String or Number: The printed value will 
    depend on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the 
    Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, 
    print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.

    Requirements:
    - Declare a function fizzBuzz that takes in a Number parameter n
    - Iterate to initialize a sequential array from 1 to n
    - Use conditional logic to replace all multiples of 3 with "Fizz" in the array using modulo operator
    - Use conditional logic to replace all multiples of 5 with "Buzz" in the array using modulo operator
    - Use conditional logic to replace all multiples of both 3 and 5 with "FizzBuzz" in the array using modulo opertor
    - Return the modified array with Fizz/Buzz/FizzBuzz replacements

    Pseudocode:
    Declare FUNCTION "fizzBuzz" with parameter "n"
    Initialize an empty array "result"
    FOR loop from 1 to n and PUSH each element into array
        IF element is divisible by 3, PUSH "Fizz"
        ELSE IF element is divisible by 5, PUSH "Buzz"
        ELSE IF element is divisble by both 3 AND 5, PUSH "FizzBuzz"
        ELSE push the value unchanged
    CONSOLE.LOG(fizzBuzz(<different test values>))
*/

function fizzBuzz(n) {
    result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i);
        }
    }
    return result;
}

// Test to invoke fizzBuzz from 1 to 10
console.log(fizzBuzz(10));

// Test to invoke fizzBuzz from 1 to 30
console.log(fizzBuzz(30));

// Test to invoke fizzBuzz from 1 to 75
console.log(fizzBuzz(75));