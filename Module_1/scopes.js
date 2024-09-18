let globalVar = 'I am global';

function showGlobal() {
    console.log(globalVar); // 'I am global'
}

showGlobal();
console.log(globalVar); // 'I am global'

//fucntion scope

function myfun(){
    let myVariable='I am fucntion scoped';
    console.log(myVariable);
}
myfun()
// console.log(myVariable)      -->error


//block scoped
function myFun(){
    if(true)
    {
        const myVar='helloLaksh';
        console.log(myVar);
    }
    // console.log(myVar);

}
myFun();

//closures;
function myClosure(){
    let count=0;
    return function(){
        count+=1;
        return count;
    }


}

const counter= myClosure();
console.log(counter());
console.log(counter());
console.log(counter());

//lexical scopes:


function  outerFunction(){
    let outerVar='I am from outer variable';
    function innerFun(){
        console.log(outerVar);

    }
    innerFun();

}

outerFunction();