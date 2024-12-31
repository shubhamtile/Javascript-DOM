var add = document.querySelector('#add')
var remove = document.querySelector('#remove')
var input = document.querySelector('input')
var ul = document.querySelector('ul')

var li;

add.addEventListener('click', function(){
    if(input.value === ''){}
    else{
        li = document.createElement('li')
        li.textContent = input.value
        ul.appendChild(li)
        li.style.fontSize = '3vw'
        ul.style.marginBottom = '2vw'
        input.value = ''
    }
})

remove.addEventListener('click', function(){
    if(ul.childElementCount === 0){}
    else{
        ul.removeChild(ul.lastElementChild)
    }
})