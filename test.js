 const backgound = document.querySelector('.background');
 const add = document.querySelector('.add').onclick= increaseCount;

let counter =0;
const count = document.querySelector('.count');

function increaseCount(){
    counter++;
    count.innerHTML = counter;

    if(counter > 0){
        count.style.color = 'blue';
        backgound.style.backgroundColor = 'yellow';
    }

}

document.addEventListener('DOMContentLoaded',function(){
    add.onclick= increaseCount;

})

function decreaseCount(){
    counter--;
    count.innerHTML = counter;

    if( counter < 0){
       count.style.color = 'red';
       backgound.style.backgroundColor = '#000';

    }
    
}


    document.addEventListener('DOMContentLoaded',function(){
        document.querySelector('.minus').onclick = decreaseCount;
    })

