const circles = document.querySelectorAll('.circle')
const back = document.getElementById('back')
const next = document.getElementById('next')
const line = document.getElementById('line')

//global var for starting point

let currentCircle = 1

//on click for next

next.addEventListener('click', () =>{
    currentCircle ++
    if (currentCircle > circles.length){
        currentCircle = circles.length
    }
    
    
     //call update function
     update()

    
})
//on click for back
back.addEventListener('click', () => {
    currentCircle -- //decrementing the current circle number by one
    if (currentCircle < 1 ){ // if the current is less than one set the currentCircle to 1
        currentCircle = 1

    }
    console.log(currentCircle)
    //call update function
    update()
})
//function to update line width
function update (){
    //loop though the circles and grab the index and the circle 
    circles.forEach((circle, index) => {
        //if the index index is less than the current circle add the active class 
        if (index < currentCircle){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
            //if the index is higher than the currect circle remove active class
        }
    })

    //get all the circles with the active class and declare them in a var

    const actives = document.querySelectorAll('.active')

    //determining the width of the line in our CSS file based on what circle increment

    line.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    //if the current circle is the fist circle we want to disable the back button

    if(currentCircle === 1){
        back.disabled = true

    } else if (currentCircle === circles.length){
        next.disabled = true

    } else {
        back.disabled = false
        next.disabled = false
    }
    

}




