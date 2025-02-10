/**
 * 1. using javascript, loop over all the list items and change their backgroundColor and color properties
    2. remove the dots from all the list items
    3. change the font size of the fifth and tenth elements, and set the font size to 28px
 */

// const listItems = document.querySelectorAll('li');
// // console.log(listItems);
// listItems.forEach( list => {
//     list.style.color = '#fff';
//     list.style.background = 'blue';
//     list.style.listStyle = 'none';    
// });


const lists = document.querySelectorAll('li');
console.log(lists);

for(let i = 0; i < lists.length; i ++){
    lists[i].style.backgroundColor = 'green';
    lists[i].style.color = '#fff';
    lists[i].style.listStyle = 'none';
    lists[4].style.fontSize = '50px';
    lists[9].style.fontSize = '50px';

}

// listItems[4].style.fontSize = '28px';
// listItems[9].style.fontSize = '28px';
// listItems[14].style.fontSize = '28px';

// 1 way
document.addEventListener('DOMContentLoaded', minusNum)
document.addEventListener('DOMContentLoaded', addNum)

let counter = 0;
const output = document.querySelector('.output');

+

function minusNum(){
    const minus = document.querySelector('#minus');
    minus.onclick = function(){
        output.innerHTML = counter;
        counter--;
    }
}







// for( i = 0; i < listItems.length; i++){
//     listItems.style.background = 'blue';
// }

