const user={
    name: "lakshana",
    email:"laksh@mail.com",
    isActive: true
}

function createUser(user :{name: string,email:string,isActive:boolean}):void{

    console.log(`${user.name} is my name with email: ${user.email} with isactive status:${user.isActive}`);
}

//  createUser({'lakshana','laksh@mail.com',true});



// createUser({name:"laksh",isPaid:true}); 


// createUser():{}{}  syntax