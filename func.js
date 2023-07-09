function game() {
    const player = prompt("Select your choice!");
    const playerSelection = player.toUpperCase();
    const computerSelection = getComputerChoice();

    function getComputerChoice() {
        let computer;
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        switch(randomNumber) {
            case 1:
                computer = "ROCK";
                break;
            case 2:
                computer = "PAPER";
                break;
            case 3:
                computer = "SCISSORS";
                break;
        }

        return computer;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "Draw";
        } else if (computerSelection === "ROCK") {
            return (playerSelection === "PAPER") ? "You Win" : "You Lose! Rock beats Scissors";
        } else if (computerSelection === "PAPER") {
            return (playerSelection === "SCISSORS") ? "You Win" : "You Lose! Paper beats Rock";
        } else if (computerSelection === "SCISSORS") {
            return (playerSelection === "ROCK") ? "You Win" : "You Lose! Scissors beats Paper";
        }
    }

    console.log("Player Selection: " + playerSelection);
    console.log("Computer Selection: " + computerSelection);
    console.log("Results: " + playRound(playerSelection, computerSelection));
    console.log("");

    return playRound(playerSelection, computerSelection);

}

let computerScore = 0;
let playerScore = 0;
for (let i=0; i<5; i++) {
    const final = game();
    if (final === "Draw") {
        computerScore += 0;
        playerScore += 0;
    } else if (final === "You Win") {
        playerScore += 20;
    } else {
        computerScore += 20;
    }
}

console.log("Computer Score: " + computerScore + "%");
console.log("Player Score: " + playerScore + "%");