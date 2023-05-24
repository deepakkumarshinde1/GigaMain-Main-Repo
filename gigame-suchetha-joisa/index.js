// promise
// deepak is present
//    thus there will session

// older way
// promise ==> true ===> resolve ==> .then(()=>{})
// promise ==> false ===> reject ==> .catch(()=>{})

// new way
// promise ==> true ===> resolve ==> try{ ... }
// promise ==> false ===> reject ==> catch(error){}

// Before es6 ==> new Promise ==> async in nature

// try {
// } catch (error) {} // sync in nature

// JS run only on one thread
// sync ==> code is block

// event loop (async)
// web api ==> async
//    promise , async/await , DOM (document object model),
//    fetch (ajax) , xhr (ajax) , setTimeout , setInterval
console.log("file is uploading on server");
setTimeout(() => {
  console.log("file uploaded in sec 10s");
}, 10 * 1000); // 1s === 1000 ms

console.log("make a payment started on server");
setTimeout(() => {
  console.log("payment done in sec 30s");
}, 30 * 1000); // 1s === 1000 ms

console.log("watch a video");
