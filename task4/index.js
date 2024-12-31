var prg = document.querySelector('.progress-bar-inner')
var h4 = document.querySelector('h4')

var count = 0
var int = setInterval(function(){
    
    h4.textContent = 'Downloading...'
    if(count === 100){
        clearInterval(int)
        h4.textContent = 'Download completed'
    }
    count++
    prg.style.width = count + '%'
    
    
}, 100)