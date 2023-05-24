// rest params ==> array
function add(...values) {
  // let result = a + b;
  let result = values.reduce((pValue, cValue) => {
    return pValue + cValue;
  }, 0);
  console.log(result);
}

// add(1, 20, 40);

function* genId() {
  for (let index = 1; index <= 10; index++) {
    yield index; // return value & halt the function
  }
}

let getMyIds = genId();
// create user ==>
console.log(getMyIds.next());

// run function & get id 1
// after some process run function & get id 2

let getMyIds1 = genId();

// redux-saga ==> gen methods
