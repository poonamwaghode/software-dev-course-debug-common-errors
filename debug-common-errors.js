/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.
//There's a missing closing quotation mark at the end of the string in the console.log() statement.

//The program will throw a syntax error because the string is not properly closed.
//console.log("Welcome to the bootcamp
console.log("Welcome to the bootcamp");
//Adding the missing closing quotation mark ensures the string is valid, resolving the syntax error. Always check that strings are correctly opened and closed with matching quotes.

// What’s Wrong?


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.
//The array contains a string "eight" that cannot be multiplied by a number. This results in NaN (Not a Number) during runtime when attempting the multiplication.
//logic error
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
   if (typeof numbers[i] === "number") {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}else {
    console.log(`Skipping non-numeric value: ${numbers[i]}`);
  }
}
//This fix checks each element's type (typeof numbers[i] === "number") to ensure only numeric values are processed. Non-numeric values are skipped to prevent runtime errors.

// What’s Wrong?



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.
//The logic incorrectly marks non-prime numbers as prime. The issue lies in the return true statement inside the for loop. It returns true as soon as a divisor is found, rather than indicating the number is not prime.
//Fix: Correct the logic to return false when a divisor is found and true only when no divisors exist:
//logic error
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Supposed to indicate num is NOT prime
    }
  }
  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?
