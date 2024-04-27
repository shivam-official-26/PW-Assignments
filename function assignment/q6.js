/*Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers.*/

function curry(func) {
  return function curried() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length >= func.length) {
      return func.apply(null, args);
    } else {
      return function () {
        var moreArgs = Array.prototype.slice.call(arguments);
        return curried.apply(null, args.concat(moreArgs));
      };
    }
  };
}

// Test the curry function with a function that adds two numbers
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)); // Outputs: 5
console.log(curriedAdd(5)(7)); // Outputs: 12
console.log(curriedAdd(10, 20)); // Outputs: 30
