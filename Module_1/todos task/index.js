const todoInput= document.getElementById('todoInput');
const todoList= document.getElementById('todoList');


function addTodo(){
    const todoText=todoInput.value;

//if empty todos is entered
    if(todoInput===''){
        prompt('please enter todo');
    }

//for each todo created, create a list element and a button//
    const li= document.createElement('li');
    const span= document.createElement('span');
    const deleteBtn=document.createElement('button');

    //for each list element set the span content as todotext, that is taken from the todoinput.value;
    span.textContent=todoText;
    deleteBtn.textContent='Delete';


    //add eventlistener to span , jispe click kiya to completed(depricated) aana chhaiye//
    span.addEventListener('click',function(){
        span.classList.toggle('completed');
    });

    //delete button pr click karne k aad list li remove ho jaana chahiye//
     deleteBtn.addEventListener('click',function(){
        li.remove();
     });


     li.appendChild(span);
     li.appendChild(deleteBtn);

     todoList.appendChild(li);
     todoInput.value='';        //reset te input value to blank for to enter new todo//
}