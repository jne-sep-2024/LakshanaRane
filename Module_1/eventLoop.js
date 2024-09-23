// // console.log("Start");

// // setTimeout(function() {
// //   console.log("This is from setTimeout");
// // }, 1000);

// // console.log("End");



// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 2");
// });

// console.log("End");


//exmaple 3
console.log('example -3');
Promise.resolve()
.then(()=>{
    console.log(1);
})

    setTimeout(()=>console.log(2),10);
    queueMicrotask(()=>{
        console.log(3)
        queueMicrotask(()=>console.log(4))
});
console.log(5)