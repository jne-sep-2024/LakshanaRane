


//----------------------------------------***---------------------------------------//

//example-->

// let success= true;
let success=true;


function getUsers(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(success){
                resolve(
                    [
                    {username:'john',email:'john@test.com'},
                    {username:'jane',email:'jane@mail.com'},
                    ]
            );
            }else{
                reject('Failed to user list');
            }
            
        }, 2000);
    })
}

// function onFullfilled(users){
//     console.log(users);
// }
// function onRejected(error){
//     console.log(error);
// }

const promise=getUsers();

// promise.then(onFullfilled,onRejected);

promise.catch((error)=>{
    console.log(error);
});

// resolve hua to o/p dega , reject hua to atch m jake error display karega!



//----------------------------------------***---------------------------------------//

//Parallel promises-> running all promises at one time, so we dont have to worry abuot waiting for one before starting for next;use-> promise.all([]) 

const recordVedioOne=new Promise((resolve, reject)=>{
  resolve('Vedio 1 recorded!');
})

const recordVedioTwo=new Promise((resolve, reject)=>{
  resolve('Vedio 2 recorded!');
})
const recordVedioThree=new Promise((resolve, reject)=>{
  resolve('Vedio 3 recorded!');
});


Promise.all([
  recordVedioOne,
  recordVedioTwo,
   recordVedioThree
]).then((messages)=>{
  console.log(messages);
});

//example 2:
const fetchUser = fetch('https://api.example.com/user');
const fetchPosts= fetch('https://api.example.com/posts');
const fetchComments= fetch('https://api.example.com/comments');

Promise.all([fetchUser,fetchPosts,fetchComments])
.then(response=>Promise.all(response.map(res=>res.json())))
.then(data=>
  {const [user,post,comment]=data;

    console.log('users:' + user);
    console.log('Posts: ' + post);
    console.log('Comments: '+  comment);
  })
  .catch(error=>{
    console.log('error: ' + error);
  })



/*
Only when all responses are successfully converted to JSON objects, we proceed to the next .then() block.
all-> it will send an array of all of the sucessfull meassages 
race->directly print for the first opeartion completed/resolved without waiting for everone to complete

*/

//exmaple -2 for promise.allSetteled()->
// If you want all promises to run and get their results, whether they succeed or fail. You don't want the entire operation to fail just because one promise did.
// Cases where partial success is acceptable, such as uploading multiple files or sending multiple requests where some might fail but others can succeed.

/*const uploadFile1 = uploadFile(file1);  // Assume uploadFile() is a function that returns a Promise
const uploadFile2 = uploadFile(file2);
const uploadFile3 = uploadFile(file3);

Promise.allSettled([uploadFile1, uploadFile2, uploadFile3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`File ${index + 1} uploaded successfully:`, result.value);
      } else {
        console.log(`File ${index + 1} failed to upload:`, result.reason);
      }
    });
  });
*/


//promise.race-> jab saare promises k resolve hone ka wait kiye bina jo resolve ho gye wo display krna ho 

Promise.race([
  recordVedioOne,
  recordVedioTwo,
   recordVedioThree
]).then((messages)=>{
  console.log(messages);
})

//example-3

const userLeft=false;
const userWatchingCatMeme=false;
function watchTutorialCallback(callback, errorCallback){
  if(userLeft){
    errorCallback({
      name:'User left',
      message:':('
    })
  }else if(userWatchingCatMeme){
    errorCallback({
      name:'USer watching cat meme',
      meesage:'WebDevSimplified<Cat'
    })
  }else{
    callback('Thumbs up and Subscribe');
  }
}

watchTutorialCallback((message)=>{
  console.log('Success:' + message);
},(error)=>{
  console.log(error.name+ ' ' + error.message);
})


