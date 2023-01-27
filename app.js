const container_width = 100
const container_height = 30

const container = document.querySelector('.container')

setcontainer()
window.addEventListener("resize",setcontainer)


function setcontainer() {
    let containerSize
    if (window.innerWidth / window.innerHeight < container_width / container_height) {
        containerSize = window.innerWidth / container_width
    } else {
        containerSize = window.innerHeight / container_height
    }
  
    container.style.width = `${container_width *containerSize }px`
    container.style.height = `${container_height * containerSize}px`
  }
  


// console.log(window.innerWidth)
// console.log(window.innerHeight)

























// prototype ===================================================================================================

// const dino = document.getElementById('dino')
// const block = document.getElementById('block')
// const result = document.getElementById('result')
// const scrore = document.getElementById('score')
// const game = document.getElementById('game')
// var count = 0;




// function jump(){
//     dino.style.top = "60px"
//     setTimeout(function(){
//         dino.style.top = "140px"
//     },800)
//     count++;
// }

// window.addEventListener('keydown',jump)


// setInterval(function gameover(){
//     var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
//     var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
//     if((blockleft < 82 ) && dinoTop != 60 ){
//         result.style.display = "block"
//         game.style.display = "none"
//         scrore.innerHTML = `score : ${count}`
//     }
// },10)


// prototype ===================================================================================================
   
    
