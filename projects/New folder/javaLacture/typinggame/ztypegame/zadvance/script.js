const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
let round = 1;
let completedWords = 0;
let gameOver = false;
let nextRound = false;
const words = ["SPACE", "ALIEN", "ROCKET", "GALAXY", "PLANET", "STAR", "COMET", "ASTEROID", "COSMOS", "NEBULA"];
const fallingWords = [];
const projectiles = [];
const explosions = [];
let wordSpeed = 0.5;
const projectileSpeed = 15;

const spaceship = new Image();
spaceship.src = '/spaceship.png';
const spaceshipObj = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50
};

const firingSound = document.getElementById("firingSound");
const destroyedSound = document.getElementById("destroyedSound");

function drawSpaceship() {
    ctx.drawImage(spaceship, spaceshipObj.x, spaceshipObj.y, spaceshipObj.width, spaceshipObj.height);
}

function createWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    const letter = {
        char: word,
        x: Math.random() * (canvas.width - 50),
        y: 0,
        width: 20,
        height: 20,
        speed: wordSpeed
    };
    fallingWords.push(letter);
}

function drawLetters() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    fallingWords.forEach(letter => {
        ctx.fillText(letter.char, letter.x, letter.y);
    });
}

function updateLetters() {
    fallingWords.forEach(letter => {
        let dx = spaceshipObj.x - letter.x;
        let dy = spaceshipObj.y - letter.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        letter.x += dx / distance * letter.speed;
        letter.y += dy / distance * letter.speed;
    });

    for (let i = fallingWords.length - 1; i >= 0; i--) {
        if (fallingWords[i].y > canvas.height) {
            fallingWords.splice(i, 1);
        }
    }
}

function createProjectile(targetLetter) {
    const projectile = {
        x: spaceshipObj.x + spaceshipObj.width / 2,
        y: spaceshipObj.y,
        width: 5,
        height: 10,
        speed: projectileSpeed,
        target: targetLetter,
    };
    projectiles.push(projectile);
}

function drawProjectiles() {
    ctx.fillStyle = "red";
    projectiles.forEach(projectile => {
        ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);
    });
}

function updateProjectiles() {
    projectiles.forEach(projectile => {
        const dx = projectile.target.x - projectile.x;
        const dy = projectile.target.y - projectile.y;
        const angle = Math.atan2(dy, dx);
        projectile.x += Math.cos(angle) * projectile.speed;
        projectile.y += Math.sin(angle) * projectile.speed;
    });

    for (let i = projectiles.length - 1; i >= 0; i--) {
        if (projectiles[i].y < 0 || projectiles[i].x < 0 || projectiles[i].x > canvas.width) {
            projectiles.splice(i, 1);
        }
    }
}

function createExplosion(x, y) {
    const explosion = {
        x: x,
        y: y,
        radius: 0,
        maxRadius: 20
    };
    explosions.push(explosion);
}

function drawExplosions() {
    ctx.fillStyle = "orange";
    explosions.forEach(explosion => {
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, explosion.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateExplosions() {
    explosions.forEach(explosion => {
        explosion.radius += 1;
    });

    for (let i = explosions.length - 1; i >= 0; i--) {
        if (explosions[i].radius > explosions[i].maxRadius) {
            explosions.splice(i, 1);
        }
    }
}

function shootLetter(char) {
    for (let i = 0; i < fallingWords.length; i++) {
        if (fallingWords[i].char.startsWith(char.toUpperCase())) {
            createProjectile(fallingWords[i]);
            fallingWords[i].char = fallingWords[i].char.slice(1);
            if (fallingWords[i].char === "") {
                fallingWords.splice(i, 1);
                completedWords++;
                score += 10;
                document.getElementById("score").textContent = "Score: " + score;
                if (completedWords >= 5 && !nextRound) {
                    nextRound = true;
                    showRoundComplete();
                }
            }
            break;
        }
    }
}

function checkCollisions() {
    for (let i = projectiles.length - 1; i >= 0; i--) {
        const projectile = projectiles[i];
        const dx = projectile.x - projectile.target.x;
        const dy = projectile.y - projectile.target.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 20) {
            createExplosion(projectile.target.x, projectile.target.y);
            projectiles.splice(i, 1);
            destroyedSound.play();
            break;
        }
    }

    for (let i = fallingWords.length - 1; i >= 0; i--) {
        if (fallingWords[i].y > spaceshipObj.y) {
            endGame();
            break;
        }
    }
}

function showRoundComplete() {
    document.getElementById("roundComplete").style.display = "block";
    document.getElementById("roundScore").textContent = score;
}

function startNextRound() {
    round++;
    completedWords = 0;
    wordSpeed += 0.5;
    nextRound = false;
    fallingWords.length = 0;
    projectiles.length = 0;
    explosions.length = 0;
    document.getElementById("roundComplete").style.display = "none";
    document.getElementById("round").textContent = "Round: " + round;
    gameLoop();
}

function endGame() {
    gameOver = true;
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("finalScore").textContent = score;
}

function restartGame() {
    score = 0;
    round = 1;
    completedWords = 0;
    gameOver = false;
    nextRound = false;
    fallingWords.length = 0;
    projectiles.length = 0;
    explosions.length = 0;
    wordSpeed = 0.5;
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("round").textContent = "Round: " + round;
    gameLoop();
}

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSpaceship();
    drawLetters();
    drawProjectiles();
    drawExplosions();
    updateLetters();
    updateProjectiles();
    updateExplosions();
    checkCollisions();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
    if (gameOver) return;
    firingSound.play();
    shootLetter(event.key);
});

setInterval(() => {
    if (gameOver || nextRound) return;
    createWord();
}, 2000);

gameLoop();
