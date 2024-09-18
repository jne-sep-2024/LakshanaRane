

/* An idea about the concept->
 *
 * async function MyFun() {
    let delhiWheather= new Promise((resolve, reject)=>{
       setTimeout(()=>{
           resolve("27 Deg");
       },2000);

   })


   let bangloreWheather= new Promise((resolve, reject)=>{
       setTimeout(()=>{
           resolve("21 Deg");
       },5000);

       
   })
   // delhiWheather.then(alert);
   // bangloreWheather.then(alert);

   console.log("fetching delhi wheather please wait...");
   let delhiW = await delhiWheather;
   console.log("delhi wheather"+ delhiW);

   console.log("feching banglore Wheather please wait... ");
   let bangloreW= await bangloreWheather;

   console.log("banglore wheather"+ bangloreW);
   return [delhiW,bangloreW];


   
}

const cherry = async ()=>{
   console.log("Hey I m cherry and im  waitng");

}
const main1 = async  ()=>{
   console.log("welcome to  wheather control room")
   let a=await MyFun();
   let b= await cherry();
   // a.then((value)=>{
   //     console.log(value);
   // })
}
   
main1();
 * 
 */

//----------------------------------------***---------------------------------------//

//CREATING PROMISES//

/*
const promise = new Promise((resolve, reject) => {
    // contain an operation
    // ...
  
    // return the state
    if (success) {
      resolve(value);
    } else {
      reject(error);
    }
  });

  */

//example1->
function getUsers() {
    let users = [];
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 1000);
    return users;
  }

  /* -------------------------------------***--------------------------------------------*/

function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making request to  ${location}`)
        if(location==='Google'){
            resolve('Google says hi');
        }else{
            reject('We can Only talk to google');
        }
    });
}


  function  processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('processing response ...');
        resolve(`extra info: + ${response}`)
    })
}


makeRequest('Google').then(response=>{
    console.log('response  received');
    return processRequest(response);
}).then(processResponse=>{
    console.assert.toString(processResponse)
}).catch(err=>{
    console.log(err);
})


/*As sooon as we write await , it will leave this for execution and carry on another tasks and then 
when this will be executed(resolved) then it will let us know by resolve/reject value msg*/
async function doWork() {
    const response= await makeRequest('Google');   
    console.log('response recieved...')     // his will executed when await returns resolve or reject
    const processedRespnse= await processRequest(response);
    console.log(processedRespnse);
}

doWork();
  
