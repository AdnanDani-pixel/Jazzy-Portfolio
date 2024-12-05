const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

let currentWordIndex = 0;
let score = 0;
const fallingSpeed = 2; 
let wordYPosition = 0;

const wordsElement = document.getElementById("words");
const scoreElement = document.getElementById("score");
const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

function updateWord (){
    wordsElement.textContent = words[currentWordIndex];
    wordYPosition = 0;
}

function drawWord () {
     wordsElement.style.top = `${wordYPosition}px`;
 }
 
 function checkInput(e){
    const inputChar = e.key.toLowerCase();
    if(inputChar === words[currentWordIndex][0]){
        shootLetter(inputChar);
        words[currentWordIndex] = words[currentWordIndex].slice(1);
        if(words[currentWordIndex].length === 0){
            score++;
            scoreElement.textContent = score;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            updateWord();
        }else{
            updateWord();
        }
    }
 }


 function shootLetter (letter){
    ctx.clearRect(0, 0, gameCanvas.Width, gameCanvas.height);
    ctx.font = "20px montserrat";
    ctx.fillStyle = "white";
    ctx.fillText(letter, gameCanvas.Width  /2, gameCanvas.height - 70);
    setTimeout(() => {
        ctx.clearRect(0, 0, gameCanvas.Width, gameCanvas.height);
    }, 1000);
 }

 function gameLoop (){
     wordYPosition += fallingSpeed;
     if(wordYPosition > window.innerHeight){
        wordYPosition = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        updateWord();
     }
     drawWord();
     requestAnimationFrame(gameLoop);
 }


window.addEventListener("keydown", checkInput);

// // Initialize the game
updateWord();
gameLoop();
