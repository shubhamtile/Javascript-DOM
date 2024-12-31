var arr = [
    {name:'Aarohi', src:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww'}, 
    {name:'Sneha', src:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww'},
    {name:'Pranjal', src:'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww'},
    {name:'Priya', src:'https://plus.unsplash.com/premium_photo-1669703777634-c98478e88e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0JTIwZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww'},
    {name:'Shweta', src:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0JTIwZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww'},
    {name:'Om', src:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBmZW1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D'}
]

var container = document.querySelector('.container') 
var input = document.querySelector('input') 

var pers = ''

// arr.map((elem, ind)=>{
//     pers += `<div class="images">
//             <img src="${elem.src}" alt=""/>
//             <h4>${elem.name}</h4>
//         </div>`
// })

arr.forEach((elem, id)=>{
    pers += `<div class="images">
            <img src="${elem.src}" alt="">
            <h4>${elem.name}</h4>
    </div>`
})

container.innerHTML = pers

input.addEventListener('input', function(){
    var match = arr.filter((elem)=>{
        return elem.name.toLowerCase().startsWith(input.value)
    })

    var users = ''

    match.forEach((elem, id)=>{
        users += `<div class="images">
                <img src="${elem.src}" alt="">
                <h4>${elem.name}</h4>
        </div>`
    })
    
    container.innerHTML = users
    
})
