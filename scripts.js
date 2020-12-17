//bringing in the elements we need from the dom
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
//make sure to always do a dote if there are more than one

// setting the current active to have a value of 1. Which ever progress step we are on. Think of this as an index
let currentActive = 1



// next button is listening for a click and increment the current active by one
next.addEventListener('click', () =>{
    currentActive++
    
    if (currentActive > circles.length){ //setting boundries so that we cannot go above the last circle
        currentActive = circles.length
        //set it to 4

    }
    update() 
    
})

//minus one when the prev button is clicked
prev.addEventListener('click', () =>{
    currentActive--
    
    if (currentActive < 1){
        currentActive = 1


    }
    update()
    
})

//this will update dom 
function update(){
    circles.forEach((circle, idx) =>{
        //for each circle we will check to see if the 
        if (idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        } //take circle and remove active class
    })


    //get all of the actie circles with the class of active
    const actives = document.querySelectorAll('.active')

    //Chaning the css width based on the which progess length
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    //actives length divded  by circles length to get percentage. -1 and add percentage.


    //check the current active is equal to one we want previous to be disabled
    if(currentActive === 1 ){
        prev.disabled = ture

        //if its at the end we will disable the next button
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {

        //we dont want either disabled 
        prev.disabled = false
        next.disabled = false
    }
}