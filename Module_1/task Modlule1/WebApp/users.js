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

        if (firstName && lastName && email) {
            const newRow = userTable.insertRow();
            // Create a new table row
            newRow.innerHTML =
                `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
             <td><button onclick="deleteUser(this)">Delete</button>

            </tr>
            `;

            // Insert the new row into the table
            // userTable.innerHTML += userTableRow;

            alert('User Added succesfully')

            // Reset the form fields
            userForm.reset();
        }else{
            alert('please fill all the feilds');
        }
    });
}

document.addEventListener('DOMContentLoaded', addUser); //manipulates dom without loading the whole page



function deleteUser(button) {
    console.log('delete button clicked');
    // const row=button.closest('<tr>');
    // if(row){
    //     row.remove();
    //     alert('user deleted');
    // }

    // const row= button.parentElement.parentElement;
    // row.remove();

}

// let users = [];

// function addUser() {
//     const userForm = document.getElementById('form');
//     const addButton = document.getElementById('add');
//     const userTable = document.getElementById('table');

//     addButton.addEventListener('click', () => {
//         userForm.style.display = 'block'; // Show the form
//     });

//     userForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting

//         const firstName = document.getElementById('firstName').value;
//         const lastName = document.getElementById('lastName').value;
//         const email = document.getElementById('email').value;
        
//         users.push({ firstName, lastName, email });
//         displayTable();
        
//         userForm.reset(); // Clear the form after submission
//         userForm.style.display = 'none'; // Hide the form after submission
//     });
// }

// function displayTable() {
//     const tbody = document.querySelector('#table tbody');
//     tbody.innerHTML = '';
//     users.forEach((user, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${user.firstName}</td>
//             <td>${user.lastName}</td>
//             <td>${user.email}</td>
//             <td><button onclick="deleteUser(${index})">Delete</button></td>
//         `;
//         tbody.appendChild(row);
//     });
// }

// function deleteUser(index) {
//     users.splice(index, 1);
//     displayTable();
// }

// addUser();
