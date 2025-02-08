// get computer choice
function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}


// get human choice
function getHumanChoice() {
    let choice = "";
    do {
        choice = prompt("Rock, paper, or scissors?").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice));

    return choice;
}


// game logic
// declare and initialize score variavbles
let humanScore = computerScore = 0;

let gameResult = document.querySelector("#gameResult");
let playerScore = document.querySelector("#playerScore");
let compScore = document.querySelector("#compScore");
let choiceTxt = document.querySelector("#choiceTxt");
let roundResult = document.querySelector("#roundResult");

gameResult.textContent = "";


function playRound(humanChoice, computerChoice) {

    // reset if new game
    if (humanScore == 5 || computerScore == 5) {
        humanScore = computerScore = 0;
        playerScore.textContent = compScore.textContent = 0;
        gameResult.textContent = "";
    }
    // clear text from previous round
    choiceTxt.textContent = "";
    roundResult.textContent = "";
    // tie
    if (humanChoice == computerChoice) {
        choiceTxt.textContent = humanChoice + " ties with " + computerChoice;
        roundResult.textContent = "It's a tie...";
    }
    // human wins
    else if ((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        choiceTxt.textContent = humanChoice + " beats " + computerChoice;
        roundResult.textContent = "You win this round!";
        humanScore++;
        playerScore.textContent = humanScore;
    }
    // computer wins
    else {
        choiceTxt.textContent = computerChoice + " beats " + humanChoice;
        roundResult.textContent = "You lose the round.";
        computerScore++;
        compScore.textContent = computerScore;
    }

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            gameResult.textContent = "You won!!!";
        } else {
            gameResult.textContent = "You lose!";
        }
    }
}


document.addEventListener("click", (e) => {
    if (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors") {
        playRound(e.target.id, getComputerChoice());
    }
})