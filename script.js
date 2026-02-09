const choice = ["rock", "paper", "scissors"];
const emojiMap = {
    rock: "👊",
    paper: "✋",
    scissors: "✌️"
};

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const playergreen = document.querySelector("#playergreen");
const computerred = document.querySelector("#computerred");
const newgamebtn = document.querySelector("#newgamebtn");

let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
    const computerchoice = choice[Math.floor(Math.random() * 3)];
    let results = "";

    if (playerchoice === computerchoice) {
        results = "It's a tie!";
    } else {
        switch (playerchoice) {
            case "rock":
                results = (computerchoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                results = (computerchoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                results = (computerchoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }
    player.textContent = `PLAYER: ${emojiMap[playerchoice]}`;
    computer.textContent = `COMPUTER: ${emojiMap[computerchoice]}`;
    result.textContent = results;

    result.classList.remove("greentext", "redtext");

    switch (results) {
        case "You win!":
            result.classList.add("greentext");
            playerscore++;
            playergreen.textContent = playerscore;
            break;
        case "You lose!":
            result.classList.add("redtext");
            computerscore++;
            computerred.textContent = computerscore;
            break;
    }
}

function resetGame() {
    playerscore = 0;
    computerscore = 0;
    player.textContent = "PLAYER:";
    computer.textContent = "COMPUTER:";
    result.textContent = "...";
    playergreen.textContent = playerscore;
    computerred.textContent = computerscore;
    result.classList.remove("greentext", "redtext");
}

newgamebtn.addEventListener("click", resetGame);
