// Switch statement
// While loop
// While loop examples
// For loop
// For loop examples
// Break and continue keyword
// Do while loop

// Q1. Create a for loop that prints number 1 to 10.

for (let currentNumber = 1; currentNumber <= 10; currentNumber++) {
  console.log(currentNumber);
}
// Q2. Create a for loop that print the array using while loop

let array1 = [11, 12, 415, 1511];
let lengthArray1 = array1.length;

let currentIndex = 0;
while (currentIndex < lengthArray1) {
  console.log(array1[currentIndex]);
  currentIndex = currentIndex + 1;
}

// Q4. create a for loop that print number 1 to 10 (only even)
for (let currentNumber = 1; currentNumber <= 10; currentNumber++) {
  if (currentNumber % 2 == 0) {
    console.log(currentNumber);
  } else {
    continue;
  }
}
// Q5. create a for loop that print number 1 to 10 (only odd)

for (let currentNumber = 1; currentNumber <= 10; currentNumber++) {
  if (currentNumber % 2 != 0) {
    console.log(currentNumber);
  } else if (currentNumber == 6) {
    console.log("break");
    break;
  }
}
