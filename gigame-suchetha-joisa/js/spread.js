// array
let arrayOne = [10, 20, 30, 40, 50];
let arrayTwo = [100, 200, 300, 400, 500];
let arrayThree = [...arrayTwo, ...arrayOne]; // new array copy

console.log(arrayThree);

// object;
let student = {
  name: "deepak",
  age: 31,
};

let course = {
  cName: "React",
  duration: 6,
};

let studentDetails = {
  ...student,
  ...course,
};

console.log(studentDetails); // merging & spread it
