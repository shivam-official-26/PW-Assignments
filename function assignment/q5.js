/*Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.*/

function factorial(num) {
  if (num < 0) console.log(`Can't calculate factorial of negative integer`);
  else {
    if (num === 0) return 1;
    else return num * factorial(num - 1);
  }
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(-1));
