const dino = document.getElementById('dino')
const block = document.getElementById('block')
const result = document.getElementById('result')
const scrore = document.getElementById('score')
const game = document.getElementById('game')
var count = 0;




function jump(){
    dino.style.top = "60px"
    setTimeout(function(){
        dino.style.top = "140px"
    },800)
    count++;
}

window.addEventListener('keydown',jump)


setInterval(function gameover(){
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    if((blockleft < 82 ) && dinoTop != 60 ){
        result.style.display = "block"
        game.style.display = "none"
        scrore.innerHTML = `score : ${count}`
    }
},10)

   
    
