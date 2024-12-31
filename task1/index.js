var start = document.querySelector('#start')
var stop = document.querySelector('#stop')
var h1 = document.querySelector('h1')

var int

start.addEventListener('click', function(){
    var count = 0

    int = setInterval(function(){
        h1.textContent = count
        count++
    }, 1000)
})

stop.addEventListener('click', function(){
    clearInterval(int)
    
})
