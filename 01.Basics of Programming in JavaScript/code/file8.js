// Q1. create a function for Linear search algorithm

// define the function
function LinarSearchAlgorithm(container, n, targetValue) {
  for (let index = 1; index <= n; index++) {
    if (container[index] == targetValue) {
      return index;
    }
  }
  return -1;
}

// declare the all variable,array
let container = [11, 13, 15, 18, 19, 231, 145];
let containerSize = container.length;
let targetValue = 231;
let resultIndex = LinarSearchAlgorithm(container, containerSize, targetValue);
