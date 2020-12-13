//bringing in the elements we need from the dom
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// setting the current active to have a value of 1. Which ever progress step we are on. Think of this as an index
let currentActive = 1

// comment

// next button is listening for a click and increment the current active by one
next.addEventListener('click', () =>{
    currentActive++
    
    if (currentActive > circles.length){ //setting boundries so that we cannot go above the last circle
        currentActive = circles.length
        //set it to 4

    }
    update()
    
})
prev.addEventListener('click', () =>{
    currentActive--
    
    if (currentActive < 1){
        currentActive = 1


    }
    update()
    
})

function update(){
    circles.forEach((circle, idx) =>{
        if (idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    if(currentActive === 1 ){
        prev.disabled = ture
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}