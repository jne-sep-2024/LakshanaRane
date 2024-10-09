const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // const error=true;

        console.log("promise 1 is running...");
        // if(error){
        //     console.log("ERROR:")
        // }
    reject();
        
    }, 1000);
})
promiseOne.then((response)=>{
    console.log("promiseOne resolved");
}).catch((err)=>{
    console.log("error")
    // console.log(err);
});


