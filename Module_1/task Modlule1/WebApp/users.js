function addUser() {
    const userForm = document.getElementById('form');
    const addButton = document.getElementById('add');
    const userTable = document.getElementById('table');

    addButton.addEventListener('click', () => {
        userForm.style.display = 'block'; // Show the form
    });

    userForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        // Create a new table row
        const userTableRow = `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            
            </tr>
            `;
            
            // Insert the new row into the table
            userTable.innerHTML += userTableRow;
            
            alert('User Added succesfully')
            // Reset the form fields
            userForm.reset();
        });
    }
    
    document.addEventListener('DOMContentLoaded', addUser); //manipulates dom without loading the whole page
    


    // // <td><button onclick="deleteUser()">Delete</button>
    // function deleteUser(){
    // console.log('delete button clicked');
// }