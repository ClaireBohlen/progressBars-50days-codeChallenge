var circles = document.querySelectorAll('circle')
var back = document.getElementById('back')
var next = document.getElementById('next')
var line = document.getElementById('line')

//global var for starting point

var currentCircle = 1

//on click for next

next.addEventListener('click', () =>{
    currentCircle ++ // incrementing the current circle by one

    //set params for max 
    if (currentCircle > circles.length){ //if the current circle is higher than the total circles set the current circle to highest circle numner
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
    

}

//function to update circle outline