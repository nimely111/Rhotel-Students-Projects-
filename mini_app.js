// single element
// const form = document.getElementById('my-form');
// const container = document.querySelector('.container');

// multiple element
// console.log(document.querySelectorAll('.list-item'));
// console.log(document.querySelectorAll('li'));
// console.log(document.getElementsByClassName('list-item'));

// const btn = document.querySelector('.btn');
// const ul = document.querySelector('#items');
// btn.onclick = function(){
//     document.querySelector('#items').style.backgroundColor = "red"
// }

// btn.addEventListener('click', () => {

// })

// ul.remove()
// ul.firstElementChild.remove()
// ul.lastElementChild.remove()



// const htmlEl = document.querySelectorAll('li');
// // htmlEl.textContent = 'Hello';
// // htmlEl.innerHTML = 'Hello';
// htmlEl[2].innerHTML = '<h1>Hello class </h1>';

// Initialization of varibles
const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const userList = document.querySelector("#users");


myForm.addEventListener('submit',  event => {
    event.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        // msg.classList.add('error');
        // msg.innerHTML = 'Please enter all fields';
         alert('Please enter all fields');

        // setTimeout(() => msg.remove(), 3000)
        // milliseconds = 1second
}else{
    // create new html element dynamically
    const li = document.createElement('li');

    const textContent = document.createTextNode(`${nameInput.value} : ${emailInput.value}`)

    li.appendChild(textContent)
    userList.appendChild(li);

    // clear fields
    nameInput.value = ''
    emailInput.value = ''
}
})
















