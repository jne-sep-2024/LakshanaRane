const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Function to add a new todo item
function addTodo() {
    const todoText = todoInput.value; //input

    if (todoText === '') {
        alert('Please enter a task'); 
        return;
    }

    const li = document.createElement('li'); 
    const span = document.createElement('span'); 
    const deleteBtn = document.createElement('button'); 

    span.textContent = todoText; // Add the task text to the span
    deleteBtn.textContent = 'Delete'; 


    //add
    span.addEventListener('click', function() {
        span.classList.toggle('completed');
    });


    //delete
    deleteBtn.addEventListener('click', function() {
        li.remove(); // Remove the list item from the DOM
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    todoInput.value = ''; 
}
