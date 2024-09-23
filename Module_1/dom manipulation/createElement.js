document.addEventListener('DOMContentLoaded', function () {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'This is paragraph!';



    const btn = document.createElement('button');
    btn.textContent = 'clicke here';

    btn.addEventListener('click', () => {
        paragraphElement.innerText = 'button clicked';
    })
    document.body.appendChild(paragraphElement);
    document.body.appendChild(btn);
})