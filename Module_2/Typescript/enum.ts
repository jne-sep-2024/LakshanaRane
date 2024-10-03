// user1=login=>nomal user
// user2=login=>admin user


enum Roles{
    'user',
    'admin'
}


type LoginDetails={
    name?: string;
    email: string;
    password: string;
    role:Roles;          //ya toh user hoga ya to admin hoga
}


const user1:LoginDetails={
    name:"laksh",
    email:'laksh@mail.com',
    password:'123',
    role:Roles.admin
}

const user2:LoginDetails={
    name:"abc",
    email:'abc@mail.com',
    password:'1233',
    role:Roles.user
}

const isAdmin=(user:LoginDetails): string=>{
    const {email,role}= user;

    return role===Roles.admin? `${email} is allowed to  edit the website`  : `${email} is  not allowed to  edit the website`;
}
console.log(isAdmin(user1));
console.log(isAdmin(user2));