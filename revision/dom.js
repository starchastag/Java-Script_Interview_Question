let elements = document.querySelectorAll('li');

elements.forEach(function(element){


    element.addEventListener('click',function(e){
        // console.log('Item clickd')
        console.log(e.target)
        e.target.style.textDecorartion = "line-through"
        e.target.remove()
    })
})