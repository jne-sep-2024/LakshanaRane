// Regular function
function simpleFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}

// Curried function
function curriedFunction(param1) {
    return function(param2) {
        return function(param3) {
            return param1 + param2 + param3;
        };
    };
}
const add= curriedFunction(3)(4)(5);

console.log(add);

function myFun(p1,p2,p3){
    return p1+p2+p3;
}

function myCurriedFunction(p1){
    return function(p2){
        return function(p3){
            return p1+p2+p3;
        }
    }
}

console.log(myCurriedFunction('my ')( 'name is ')("lakshana"));
