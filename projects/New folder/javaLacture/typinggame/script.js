const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];
let currentWordIndex = 0;
let score = 0;

const wordsElement = document.getElementById("words");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

function updateWord(){
    wordsElement.textContent = words[currentWordIndex];
}

function checkInput() {
if(inputElement.value === words[currentWordIndex]){
       score++;
       scoreElement.textContent = score;
       inputElement.value = "";
       currentWordIndex = (currentWordIndex + 1) % words.length;
       updateWord();
   }
}

inputElement.addEventListener("input", checkInput);

updateWord();


// const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];
// let currentWordIndex = 0;
// let score = 0;

// const wordsElement = document.getElementById("words");
// const inputElement = document.getElementById("input");
// const scoreElement = document.getElementById("score");

// function updateWord() {
//     wordsElement.textContent = words[currentWordIndex];
// }

// function checkInput() {
//     if (inputElement.value === words[currentWordIndex]) {
//         score++;
//         scoreElement.textContent = score;
//         inputElement.value = "";
//         currentWordIndex = (currentWordIndex + 1) % words.length;
//         updateWord();
//     }
// }

// inputElement.addEventListener("input", checkInput);

// Initialize the game
// updateWord();
