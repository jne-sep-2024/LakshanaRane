var a=10;
var a='heyy';

console.log(a)
// let b= 20;
// // let b=24

// const v=463729;
// // const v=628190;

function sum(){
    a=100;
    var b=200;
    console.log(a+b);
}
sum();


function say(){
    var a1='hello';
    let name='lakshana';
    const constant="this is constant varibale;";
    {
        let str="heyyi morning";
        console.log('name: ' +name);
        console.log(a1);
        
        console.log(str);
    }
    console.log(constant);
}
say();

{var newVariable= "Hello this is laksh";
}

console.log('newVariable: '+ newVariable);
