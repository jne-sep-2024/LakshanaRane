
// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); 
//         })
//         .then(userData => {
//             console.log(userData)
//             const table = document.getElementById('userTable');

//               let headerTable = 
//                 `
//                     <tr>
//                         <td>id</td>
//                         <td>name</td>
//                         <td>email</td>
//                         <td>phone</td>
//                     </tr>
//                 `;
//                 table.innerHTML += headerTable;
                
//             userData.forEach(user => {
//                 const row = 
//                 `
//                     <tr>
//                         <td>${user.id}</td>
//                         <td>${user.name}</td>
//                         <td>${user.email}</td>
//                         <td>${user.phone}</td>
//                     </tr>
//                 `;
//                 table.innerHTML += row;
//             });

//             console.log('User Data:', userData);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

async function getUsers() {
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(userData => {
            console.log(userData)
            const table = document.getElementById('userTable');

              let headerTable = 
                `
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                    </tr>
                `;
                table.innerHTML += headerTable;
                
            userData.forEach(user => {
                const row = 
                `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                    </tr>
                `;
                table.innerHTML += row;
            });

            console.log('User Data:', userData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// getUsers();
    
    // function getUsers() {
        // console.log('called');
    
    // data => {
        //     const table = document.getElementById('userTable');
        
        //     console.log(data);
        
    //     data.forEach(user => {
    //         const row = 
    //         `
    //             <tr>
    //                 <td>${user.id}</td>
    //                 <td>${user.name}</td>
    //                 <td>${user.email}</td>
    //                 <td>${user.phone}</td>
    //             </tr>
    //         `
    //         table.innerHTML += row;
    //     });
    // })
    // .catch(error => console.log('Error:', error));

// }
