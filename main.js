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
function playGame() {
    // declare and initialize score variavbles
    let humanScore = computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // announce choices
        console.log("You: " + humanChoice + "\nComputer: " + computerChoice);
        // tie
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        }
        // human wins
        else if ((humanChoice == "rock" && computerChoice == "scissors")
            || (humanChoice == "paper" && computerChoice == "rock")
            || (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log("You win this round!");
            humanScore++;
        }
        // computer wins
        else {
            console.log("You lose the round.");
            computerScore++;
        }
    }

    console.log("Five rounds... GO!!!")

    for (let i = 1; i < 6; i++) {
        // get choices
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("*** Round " + i + " ***");
        playRound(humanChoice, computerChoice);
        
        console.log("Your score: " + humanScore + "\nComputer's score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("YOU ARE THE WIENER!");
    } else {
        console.log("Awww, you lose!");
    }
}

playGame();