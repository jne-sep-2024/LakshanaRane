fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user 1'
    })
})
.then(res => {
    return res.json();
    // if(res.ok){
    //     console.log('success..');
    // }else{
    //     console.log('not success..');
    // }
})
.then(data => console.log(data))
.catch(error => console.log('Error:', error));
