interface newUser{

    readonly dbId: number,      //can't be modified
    email:string,
    userId: number,
    googleId? :string       //optional

    // method signature


    // startTrial: ()=>string
    startTrial():string,

    getCoupon(couponName:string,value:number):number



}

const laksh:newUser={
    dbId:516835,
    email:'laksh@mail.com',
    userId:562,
    googleId:"G1234",

    startTrial(){
        return"hello";
    },

    getCoupon:(couponName:"hnm",off:10)=>{
        return 10;
    }
}

laksh.email='lakshana@gmail.com';

// laksh.dbId=234;          //gives error