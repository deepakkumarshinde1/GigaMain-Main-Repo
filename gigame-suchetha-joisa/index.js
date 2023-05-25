// promises
// handel exception
// async in nature ==> non blocking

// old promise ==> Promise
function div(numberOne, numberTwo) {
  return new Promise((resolve, reject) => {
    if (numberTwo === 0) {
      // error :: Cannot divide by zero
      // rejection of promise
      reject("Cannot divide by zero");
    } else {
      let result = numberOne / numberTwo;
      // correct
      // resolve of promise
      resolve(result);
    }
  });
}
div(10, 0)
  .then((data) => {
    console.log("result ", data);
  })
  .catch((error) => {
    console.log("error ", error);
  });
// new promise ==> async

async function divTwo(numberOne, numberTwo) {
  if (numberTwo === 0) {
    // error :: Cannot divide by zero
    // rejection of promise
    return Promise.reject("Cannot divide by zero");
  } else {
    let result = numberOne / numberTwo;
    // correct
    // resolve of promise
    return Promise.resolve(result);
  }
}

// run a single
divTwo(10, 0)
  .then((data) => {
    console.log("result ", data);
  })
  .catch((error) => {
    console.log("error ", error);
  });

// run multi Promise in older way
divTwo(10, 10)
  .then((data) => {
    console.log("result-1 ", data);
    return div(10, 0);
  })
  .then((data) => {
    console.log("result-2 ", data);
  })
  .catch((error) => {
    console.error("error ", error);
  });

// run multiple promise ==> async await
// await ==> run promises one by one

async function calc() {
  try {
    let resultOne = await divTwo(10, 10);
    let resultTwo = await div(10, 20);
    console.log("result-1 ", resultOne);
    console.log("result-2 ", resultTwo);
  } catch (error) {
    console.error("error ", error);
  }
}

calc();

// IIFE ==> Immediate Invoke function express
(async () => {
  try {
    let resultOne = await divTwo(10, 10);
    let resultTwo = await div(10, 20);
    console.log("result-1 ", resultOne);
    console.log("result-2 ", resultTwo);
  } catch (error) {
    console.error("error ", error);
  }
})();

// callback hell
// handel error
// complex syntax
div(10, 0, () => {
  mul(10, 50, () => {
    sub(10, 50, () => {
      printDiv(10, 50, () => {
        div(10, 50, () => {
          div(10, 50, () => {});
        });
      });
    });
  });
});

// local storage
// basic node js
// npm and commands
// react
