var tabs = document.querySelectorAll('.tabs');
var p = document.querySelectorAll('p')

p[0].style.display = 'block'

tabs.forEach(function(tab, i){
    tab.addEventListener('click', function(){
        hideAllText()
        p[i].style.display = 'block'
    })
})

function hideAllText(){
    p.forEach(function(p){
        p.style.display = 'none'
    })
}