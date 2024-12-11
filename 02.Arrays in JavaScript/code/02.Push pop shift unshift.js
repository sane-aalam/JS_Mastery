const collectionBookStore = [
  "Stev Jobs",
  "Power of mind",
  "Mindset",
  "How to win the game of life",
  "You can't hurt me",
  "Devide Goggines - You can win",
  "Mahata Gadhi",
];

//* Push pop shift unshift

let newBookName = "Think and grow rich";
collectionBookStore.push(newBookName);
// Appends new elements to the end of an array, and returns the new length of the array

// Remove the last element from an array and returns it 
// If the array is empty, underfind is returned and the array is not modified
collectionBookStore.pop();

// 'Think and grow rich', book insert into the start of index
// insert the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
collectionBookStore.unshift(newBookName);
console.log(collectionBookStore);

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
collectionBookStore.shift();
console.log(collectionBookStore);
