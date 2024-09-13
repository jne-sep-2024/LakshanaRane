async function MyFun() {
    return 5;
}
MyFun.then((x)=>{
    alert(x);
})

let delhiWheather= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("21 Deg");
    },2000);

})


let bangloreWheather= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("21 Deg");
    },2000);

})