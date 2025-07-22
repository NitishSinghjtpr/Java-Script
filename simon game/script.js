
let gameSequence = [];
let userSequence = [];
let btns = ["yellow", "red", "purple", "green"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSequence = [];
    level++;
    h2.innerText = `Level: ${level}`;

    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randIndex];
    gameSequence.push(randColor);

    let btn = document.getElementById(randColor);
    btnFlash(btn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}

function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id");

    userFlash(btn);
    userSequence.push(userColor);

    checkAnswer(userSequence.length - 1);
}

let boxes = document.querySelectorAll(".box");
for (let btn of boxes) {
    btn.addEventListener("click", btnPress);
}

function checkAnswer(currentIndex) {
    if (userSequence[currentIndex] === gameSequence[currentIndex]) {
        if (userSequence.length === gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `Game Over! Your Score: ${level}. Press any key to restart`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "#212121";
        }, 200);

        resetGame();
    }
}

function resetGame() {
    gameSequence = [];
    userSequence = [];
    level = 0;
    started = false;
}
