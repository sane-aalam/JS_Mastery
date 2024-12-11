function reverseArray(arr, startIndex, endIndex) {
  while (startIndex <= endIndex) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}

// update -> for in loop
// for in loop(index)
function printingArray(arr) {
  for (let element in arr) {
    console.log(arr[element]);
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
