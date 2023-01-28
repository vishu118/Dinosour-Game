const container = document.querySelector("#container");
const dino = document.querySelector("#dino");
const block = document.querySelector("#block");
const road = document.querySelector("#road");
const cloud = document.querySelector("#cloud");
const score = document.querySelector("#score");
const gameOver = document.querySelector("#gameOver");
const getscore = document.querySelector("#showscore")


//declaring variable for score
let playerScore = 0;
audio = new Audio('music.mp3');
gameover = new Audio('gameover.wav')




//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score : <b>${playerScore}</b>`;
}


//start Game
window.addEventListener("keydown", (start) => {
   
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.classList.add("roadActive");
        cloud.classList.add("cloudActive");
        
            audio.play();
        

        //score
         playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            // remove class after 0.5 seconds
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});

//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    //    console.log("dinoBottom" + dinoBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game Over");

        gameOver.style.display = "block";
        getscore.innerHTML = `${playerScore}`
        block.classList.remove("blockActive");
        road.classList.remove("roadActive");
        cloud.classList.remove("cloudActive");
        audio.pause();
        gameover.play()
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);


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
