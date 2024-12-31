const buttons = document.querySelectorAll('.button')
//console.log(buttons);
const body = document.querySelector('body')
//console.log(body);

buttons.forEach(function(b){
    //console.log(b);
    b.addEventListener('click', function(e){
        if(e.target.id === 'pink'){
            body.style.backgroundColor = 'pink'
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }

    })
})