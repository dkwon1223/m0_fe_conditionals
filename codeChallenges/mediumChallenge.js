/*
    Medium Coding Challenge: 
    
    var goodDrivingRecord = true;
    var age = 24;

    Write a program that evaluates the status of the variables above, and uses logic to print 
    one of three possible messages:
    - If the driving record is good and user is over 25 years old, they should get a discount
    on the car rental
    - If the user either has a good record or is over 25 years old, they should pay full price
    - If the user is not over 25 and has a bad driving record, they need to have someone 
    else sign for the rental

    Requirements:
    - Declare a function rentalStatus with 2 parameters: goodDrivingRecord and age
    - Use conditional logic to evaluate 2 variables: Boolean goodDrivingRecord and
    Number age
    - Once evaluated, return one of 3 messages based on the requirements

    Pseudocode:
    Declare FUNCTION "rentalStatus" with parameters "goodDrivingRecord" and "age"
    IF goodDrivingRecord is true AND age is greater than 25, return String "You get a discount on your rental!"
    ELSE IF goodDrivingRecord is true OR age is greater than 25, return String "You are paying full price for this rental."
    ELSE return String "Sorry, you must have a guardian sign for this rental."
    CONSOLE.LOG(rentalStatus(<different test values>))
*/

//  Declare function with given parameters
function rentalStatus(goodDrivingRecord, age) {
    // First condition
    if (goodDrivingRecord && age > 25) {
        return "You get a discount on your rental!";
        // Second condition
    } else if (goodDrivingRecord || age > 25) {
        return "You are paying full price on this rental.";
    } else {
        // Third condition
        return "Sorry, you must have a guardian sign for this rental."
    }
}

// Test if first condition works
console.log(rentalStatus(true, 27));
console.log(rentalStatus(true, 78));

// Test if second condition works
console.log(rentalStatus(true, 20));
console.log(rentalStatus(false, 38));

// Test if third condition works
console.log(rentalStatus(false, 6));
console.log(rentalStatus(false, 24));