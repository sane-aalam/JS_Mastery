//*concept-1 Spread Operators

const collectionBookStore = [
  "Stev Jobs",
  "Power of mind",
  "Mindset",
  "How to win the game of life",
  "You can't hurt me",
  "Devide Goggines - You can win",
  "Mahata Gadhi",
];

console.log(collectionBookStore);

const newCollectionBooks = [
  "Life of game",
  "Life of death",
  "Game Theory",
  "SchoolMate",
  "Bangore city of clean",
];

// Spread operator
// Copy all elment into the CollectionBookStore(Array1)
collectionBookStore.push(...newCollectionBooks);
console.log(collectionBookStore);

// React(week-5)(cohort0-100)
// Problem statement-1
// 1. Create ToDoList (title,discription,markdone)
// 2. Render the todoList
// 3. When you click the button, insert more todo Elements
// 4. setTodoList(...{"title":"item1","discription":"This is items1"})

const TodoList = [
  {
    title: "Stev Jobs Book-1",
    discription: "Walter Isaacson",
    markDone: true,
  },
  {
    title: "Stev Jobs Book-2",
    discription: "Walter Isaacson",
    markDone: true,
  },
];

// const [currentState,udpateState] = usestate()
// 1. Define the intial state
// 2. Define the components
// 3. AnyTime onclikc function called, update the state, re-render the component, show new TODO_LIST
// Syntax Helps -
// const [TodoList,SetTodoList] = useState([])

// concept-3 Clone Array (...)
const arr = [11, 12, 13, 14, 15];
const newArr = [...arr];
console.log(newArr);

// Behide the since working ::
const newArray = [];

for (let index = 0; index < arr.length; index++) {
  newArray.push(arr[index]);
}

console.log(newArray);
