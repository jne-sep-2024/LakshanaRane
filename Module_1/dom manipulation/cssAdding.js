document.addEventListener('DOMContentLoaded',function(){
    const box= document.createElement('div');
   box.textContent="this is box element" ;
   box.style.height="100px";
   box.style.width="100px";

//    setTimeout(() => {
//     box.classList.add('fade-in'); // 2 seconds baad class add karega
// }, 2000);

   box.addEventListener('click',function(){
    box.classList.toggle('highlight');      //classList=>element ke andar jitne bhi classes h uski list 

   });
   document.body.appendChild(box);
});