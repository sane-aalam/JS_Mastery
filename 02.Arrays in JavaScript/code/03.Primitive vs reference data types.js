// -> Primitive vs reference data types

// These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods.

// Examples of such data types are numbers, strings, booleans, null, and undefined.

// Easy to understand
// call by value
// call by reference

let numOne = 50;
let numTwo = numOne; //numTwo=numOne=50
numOne = 100;
console.log(numOne); //outputs 100
console.log(numTwo); //outputs 50

let info = {
  Name: "Abc",
  Age: 10,
};
console.log(`Name : ${info.Name} Age : ${info.Age}`);

let info1 = info;
// we have change other varible,but changed orignial data
info1.Age = 14; // Change the Age of original object
console.log(`Name : ${info.Name} Age : ${info.Age}`);
