const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");

const ratioAndFactorial = (num1, num2, num) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num);
  return { ratio, factorial };
};
ratioAndFactorial(1, 2, 3);

module.exports = ratioAndFactorial;
