const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const outputDiv = document.getElementById("output-div");
const playerDiv = document.getElementById("output-2");
const winDiv = document.getElementById("win-div");
const explainDiv = document.getElementById("explain");
const counterDiv = document.getElementById("counter");

let counter = 0;
let consecutiveWins = 0;


rockButton.addEventListener("click", () => {
    player1();
    if (rpcArray[0] === 1) {
        explainDiv.innerHTML = "Rock Ties Rock";
        outputDiv.innerHTML = "You Selected 🪨";
        winDiv.innerHTML = "Tie!";
        counterDiv.innerHTML = `Your Streak... ${counter}`;
    } else if (rpcArray[0] === 3) {
        explainDiv.innerHTML = "Rock BEATS Scissors";
        outputDiv.innerHTML = "You Selected 🪨";
        winDiv.innerHTML = "You Win!";
        counterDiv.innerHTML = `Your Streak... ${counter += 1}`;
        consecutiveWins++;
    } else {
        explainDiv.innerHTML = "Paper BEATS Rock";
        outputDiv.innerHTML = "You Selected 🪨";
        winDiv.innerHTML = "You Lose!";
        counterDiv.innerHTML = `Your Streak... ${counter = 0}`;
        consecutiveWins = 0;
    }
    reset();
    checkWins();
})


scissorsButton.addEventListener("click", () => {
    player1();
    if (rpcArray[0] === 3) {
        explainDiv.innerHTML = "Scissors Ties Scissors";
        outputDiv.innerHTML = "You Selected ✂️";
        winDiv.innerHTML = "Tie!";
        counterDiv.innerHTML = `Your Streak... ${counter}`;
    } else if (rpcArray[0] === 2) {
        outputDiv.innerHTML = "You Selected ✂️";
        explainDiv.innerHTML = "Scissors BEATS Paper";
        winDiv.innerHTML = "You Win!";
        counterDiv.innerHTML = `Your Streak... ${counter += 1}`;
        consecutiveWins++;
    } else {
        outputDiv.innerHTML = "You Selected ✂️";
        explainDiv.innerHTML = "Rock BEATS Scissors";
        winDiv.innerHTML = "You Lose!";
        counterDiv.innerHTML = `Your Streak... ${counter = 0}`;
        consecutiveWins = 0;
    }
    reset();
    checkWins();
})


paperButton.addEventListener("click", () => {
    player1();
    if (rpcArray[0] === 2) {
        outputDiv.innerHTML = "You Selected 📄";
        winDiv.innerHTML = "Tie";
        explainDiv.innerHTML = "Paper Ties Paper";
        counterDiv.innerHTML = `Your Streak... ${counter}`;
    } else if (rpcArray[0] === 1){
        explainDiv.innerHTML = "Paper BEATS Rock";
        outputDiv.innerHTML = "You Selected 📄";
        winDiv.innerHTML = "You Win!";
        counterDiv.innerHTML = `Your Streak... ${counter += 1}`;
        consecutiveWins++;
    } else {
        explainDiv.innerHTML = "Scissors BEATS Paper";
        outputDiv.innerHTML = "You Selected 📄";
        winDiv.innerHTML = "You Lose";
        counterDiv.innerHTML = `Your Streak... ${counter = 0}`;
        consecutiveWins = 0;
    }
    reset();
    checkWins();
})




// 1 = Rock, 2 = Paper, 3 = Scissors

//Rock beats Scissors
//Paper beats rock
//Scissors beats paper

//Rock beats scissors, rock loses paper, rock ties rock
//Paper beats rock, scissors beats paper, paper ties paper
//Scissors beats paper, 



const newArray  = [1,2,3];
let rpcArray = [];

const player1 = () => {
    let randomIndex = Math.floor(Math.random() * newArray.length);
    let randomNumber = newArray[randomIndex];
    rpcArray.push(randomNumber);
    if (rpcArray[0] === 1) {
        playerDiv.innerHTML = "Ai selected... 🪨";
        flashFunction();
    } else if (rpcArray[0] === 2) {
        playerDiv.innerHTML = "Ai selected... 📄";
        flashFunction();
    } else {
        playerDiv.innerHTML = "Ai selected... ✂️";
        flashFunction();
    }
}


const reset = () => {
    rpcArray = [];
}

const flashFunction = () => {
    playerDiv.classList.add("flash");
        setTimeout(function() {
            playerDiv.classList.remove("flash");
        }, 1000);
}



const checkWins = () => {
    if (consecutiveWins >= 2) {
        counterDiv.innerHTML = `${counter} - HEATING UP`;
    } if (consecutiveWins >= 4) {
        counterDiv.innerHTML = `${counter} - ON FIYA`;
    }
}

