
//any:

let hero;

function getHero(){
    return "thor";

}
hero=getHero();



//fucntions:

function signUpUser( name: string,email: string, ispaid: boolean){
    
}
signUpUser("lakshana","laksh@mail.com",true);
 

let loginUser=(name: string, email : string,isPaid: boolean=false)=>{

}


//this below fucntion willl retrun me data of type number 
function addTwo(num: number):number{
    return num+2;
    // return "hello"
}

//callback()
let heroes=["thor","Cap. America","Ragnork","Groot","Spidy"];

heroes.map((hero: string)=>{
    return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg) ;
}

function handleError(errmsg: string):never{
     throw new Error(errmsg);
}


// let greetings: string="hello laksh";
// console.log(greetings);


// // /number:
// let userId: number=334455;
// // userId.toExponential()



// export{}