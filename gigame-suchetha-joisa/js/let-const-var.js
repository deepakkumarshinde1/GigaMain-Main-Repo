function add() {
  let a = 10; // mem
  if (2 === 2) {
    const a = 10; // mem
    a = 20;
  } // block

  //   console.log(a);
}

add();

// ==  => only data
// === ==> data & data type
