// original array -> [11, 12, 13, 14, 15]
// reverse array -> [15, 14, 13, 12, 11]

// arr.reverse() Method - algorithm
function reverseArray(arr, startIndex, endIndex) {
  while (startIndex <= endIndex) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}

function printingArray(arr) {
  let index = 0;
  while (index < arr.length) {
    console.log(arr[index]);
    index = index + 1;
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
