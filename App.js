// each file is called a module and is loaded by the require function
require("dotenv").config();

const firstName = process.env.FIRST_NAME;
const aliases = process.env.ALIAS;

console.log(`Hello ${firstName}!`);
const addFunction = (a, b) => {
  console.log(a + b);
};

addFunction(2, 3);

const subtractFunction = (a, b) => {
  console.log(a - b);
};

subtractFunction(4, 9);
module.exports.addFunction = addFunction;
module.exports.subtractFunction = subtractFunction;
