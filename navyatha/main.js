const array = [10, 20, 30, 40, 50, 60];
// array = [];
// array.length = 0;
console.log(array.length);

array.forEach((number, key) => {
  console.log(number, key);
});

array.map(() => {
  return;
});

// associative array
// json array or object array
let list = [
  {
    name: "a",
  },
  {
    name: "b",
  },
  {
    name: "c",
  },
  {
    name: "d",
  },
];

console.log(list[0].name);
