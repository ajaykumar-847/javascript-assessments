/*
                Module 1 – Assessment
Create a simple calculator in Javascript. 
•	create mock data using let/const keywords
•	use conditional statements for input data validations
•	use switch case to select the type of arithmetic operation to be performed.
*/


// Function to validate the input data
function validateData(val1, val2, operation) {
    // Check whether the values type is number or not
    if (typeof val1 !== "number" || typeof val2 !== "number") {
        console.log("Enter valid number");
        return false;
    }
    // Check the operator
    else if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
        return true;
    }
    else {
        console.log("Enter valid operator");
        return false;
    }
}

// Calculator function
function calculator(num1, num2, operation, flag) {
    if (flag == false) {
        console.log("Sorry, cannot perform any operations!!");
        return;
    }
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("unexpected error");
            break;
    }
    console.log("Result of " + num1 + " " + operation + " " + num2 + " = " + result);
}

// Mock data
let num1 = 15;
let num2 = 10;
let operation = '+';

// Validate input data
let validInputFalg = validateData(num1, num2, operation);
calculator(num1, num2, operation, validInputFalg);



