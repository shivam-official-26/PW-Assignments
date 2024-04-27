/*Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.*/

function calculateTax(income) {
  if (income <= 500000) {
    console.log(`Tax rate = 10%`);
    console.log(`Tax to be paid = ${(income / 100) * 10}`);
  }
  if (income >= 500000 && income <= 1000000) {
    console.log(`Tax rate = 20%`);
    console.log(`Tax to be paid = ${(income / 100) * 20}`);
  }
  if (income >= 1000000) {
    console.log(`Tax rate = 30%`);
    console.log(`Tax to be paid = ${(income / 100) * 30}`);
  }
}
calculateTax(400000);
calculateTax(800000);
calculateTax(2000000);
