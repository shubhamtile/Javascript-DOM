var bar = document.querySelector('.bar')

window.onscroll = ()=>{
    updateProgressBar()
}

function updateProgressBar(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var progress = (scrollTop / scrollHeight) * 100

    bar.style.width = progress + '%'
}