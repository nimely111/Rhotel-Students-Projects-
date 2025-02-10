// initialization of global variables
let counter = 0;
const count = document.querySelector('.count')

//function expression  and arrow function
const increaseCount = () =>  {
    // add 1 to variable counter for each click
    counter++;
    count.innerHTML = counter;
    if(counter > 0){
        count.style.color = 'blue';
    }
    // document.querySelector('.count').innerHTML = counter;
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = increaseCount;

})

// setInterval(function(){
//     increaseCount()
// }, 1000)

setInterval(() => increaseCount(
    
), 1000)


// minus function
function decreaseCount(){
    counter--;
    count.innerHTML = counter;
    // document.querySelector('.count').innerHTML = counter;
    if(counter < 0){
        count.style.color = 'red'
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.minus').onclick = decreaseCount ;
})

