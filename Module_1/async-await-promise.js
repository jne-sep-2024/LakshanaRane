



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
  


//example-->

// let success= true;
let success=false;


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