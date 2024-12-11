function reverseArray(arr, startIndex, endIndex) {
  while (startIndex <= endIndex) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}

// update -> for of loop
// for of loop (element)
function printingArray(arr) {
  for (let element of arr) {
    console.log(element);
  }
}

const arr = [11, 12, 13, 14, 15];
console.log("Before ::");
printingArray(arr);
let startIndex = 0;
let endIndex = arr.length;
reverseArray(arr, startIndex, endIndex);
console.log("After ::");
printingArray(arr);
