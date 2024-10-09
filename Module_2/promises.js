//creating promises:

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task completed");
    resolve(); //connecting to .then
  }, 1000);
});

// consuming promises
//jab promise resolve hoga to .then m jaygea nahi to .catch m jayega
promiseOne.then(() => {
  console.log("promise consumed");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve(); //connecting to .then
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "laksh", email: "laksh@mail.com" }); //ye ab resolve .then m user ko pass kr dega
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

///////////////////////////////////////////handling promise using .then.catch///////////////////////////////////////////////////////

const promsieFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "laksh", password: "1234" });
    } else {
      reject("ERROR: something wnet wrong");
    }
  }, 1000);
});

promsieFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise is either resolved or rejected");
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javacsript", password: "js12" });
    } else {
      reject("ERROR: something wnet wrong");
    }
  }, 1000);
});

///////////////////////////////////////////handling promise using async await////////////////////////////
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

///////////////////////////////////////////////////////////////////////////////////////////////////////

async function getAllUsers() {
  try {
    //    fetch func^ time leta h thoda-> so await karao usko
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    //  ab conversion bhi time lega thoda to isko bhi await karana padega
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error:", error);
  }
}

getAllUsers();



//fetch api
fetch("https://jsonplaceholder.typicode.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
