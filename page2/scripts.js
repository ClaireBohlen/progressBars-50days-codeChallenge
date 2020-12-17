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
    currentCircle --
    console.log(currentCircle)
})

    //call update function
    //set params for back









//function to update line width

//function to update circle outline