


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
})

/*

all-> it will send an array of all of the sucessfull meassages 
race->directly print for the first opeartion completed/resolved without waiting for everone to complete

*/

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


