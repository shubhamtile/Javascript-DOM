var textarea = document.querySelector('textarea')
var count = document.querySelector('#content')

textarea.addEventListener('input', function(){
    count.textContent = textarea.value.length
})