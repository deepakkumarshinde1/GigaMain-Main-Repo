let array = [10, "a", function () {}, 10];
// read array
// some methods has functions a parameter
array.forEach(function () {}); // read data
array.find(); // find a single result
array.filter(); // are set result in array
array.map(); // re-create a array
array.reduce(); // get single output
array.sort(); // asc ,desc
array.findIndex(); // index a of a given value
// don't have a function parameter

array.push(); // add data form end of array
array.pop(); // remove data from end
array.unshift(); // add element form beginning
array.shift(); // remove element from beginning
array.splice(); // remove/add element for a given location
array.slice(); // create new copy of array but cutting it
array.includes(); // it is use check the value is present or not
array.join(); // convert array to string

//create a copy
let array2 = array.concat();

// es6 create a new copy and concat
let array3 = [...array];
// function name function
function add() {} // def
add();
// arrow function
// ()=>{}

//function expression
let sub = function () {};

// callback function
array.find(function () {})(
  // I I F E
  function (varOne) {}
)(10);

// object in js
// js object i.e JSON :: collection key & value
// key are user define
// we can use key only once a object

let obj = {
  name: "Kumar",
};
Object.freeze(obj);

obj.age = 21;
obj.name = "deepak";

console.log(obj.name);

Object.keys(obj); //[key1,key2]
Object.values(obj); // [value1,value2]
Object.entries(obj); // [ [key1,value1], [key2,value2] ]

// create copy object
let obj2 = Object.assign({}, obj);

// es6 create copy object & concat
let obj3 = { ...obj };

let obj = {
  name: "Sam",
};

let prop = "name";
obj[prop] = "suraj";
obj.name = "suraj";

let restaurant = {
  rName: "KFC",
  rLocation: "Mumbai",
  rMinCost: 299,
};

// es5
// let rName = restaurant.rName;
// let rLocation = restaurant.rName;
// let lowCost = restaurant.rMinCost;

// es6 destructing
let { rName, rLocation, rMinCost: lowCost } = restaurant;

console.log(rName);
console.log(rLocation);
console.log(restaurant.rMinCost);
