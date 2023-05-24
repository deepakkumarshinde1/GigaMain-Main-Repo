let array = [10, "deepakkumar", 10.5];

// by index
// let numberOne = array[0];
// let stringOne = array[1];

// es6
// Array
let [numberOne, stringOne] = array;

console.log(numberOne);
console.log(stringOne);

console.log(array);

// JS Object ==> JSON (javascript object notation)
let student = {
  name: "Sam",
  age: 24,
  course: "React JS",
};
// call a data of js object we use (.) dot
// let sName = student.name;
let { name: sName, course, sample = "deepak" } = student;

console.log(sName);
console.log(student.age);
console.log(course);
