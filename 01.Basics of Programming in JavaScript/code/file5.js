// Null, undefined, BigInt, typeof
// Booleans and Comparison Operator
// Truthy and Falsy Values

// null: Represents the intentional absence of any object value. It's explicitly assigned and means "nothing" or "empty."

// undefined: Indicates a variable has been declared but not assigned a value, or a function does not return anything.

const studentLibraryCard = undefined;
const studentLibraryCardCode = null;

console.log(studentLibraryCard);
console.log(studentLibraryCardCode);
console.log(typeof studentLibraryCard);
console.log(typeof studentLibraryCardCode);

// result - output
// undefined
// null
// type of - output
// undefined
// object

console.log(5 == 5);
console.log(5 < 4);
console.log(5 > 4);
console.log(5 <= 5);
console.log(5 >= 6);
console.log(5 != 5);

function isPresntElementIntoArray(arr) {
  let currentIndex = 0;
  let targetValue = 19;

  while (currentIndex < arr.length) {
    if (arr[currentIndex] == targetValue) {
      return true;
    }
    currentIndex = currentIndex + 1;
  }
  return false;
}

let arr = [11, 12, 15, 17, 19, 20];
const result = isPresntElementIntoArray(arr);
console.log("result of -> ", result);
