// If else statement
// Ternary Operator
// && || operator
// Nested if else
// If elseif else

// #code-1
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

// Ternary Operator
let netfixUserAge = 18;
const watchNetfixorNot = netfixUserAge < 18 ? "can't watch" : "watch Now";
console.log(watchNetfixorNot);



