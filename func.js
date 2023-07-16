game();
function game() {

    const computerChoice = document.getElementById("comp");
    const playerChoice = document.getElementById("play");
    const result = document.getElementById("res");
    const playerSelected = document.querySelectorAll(".game-cta")
    const computerScoreText = document.getElementById("compScore");
    const playerScoreText = document.getElementById("playScore");

    let computerSelection;
    let playerSelection;
    let computerScore = 0;
    let playerScore = 0;

    playerSelected.forEach(button => button.addEventListener('click', () => {
        const player = button.textContent;
        playerSelection = player.toUpperCase();
        getComputerChoice();
        computerChoice.textContent = `${computerSelection}`;
        playerChoice.textContent = `${playerSelection}`;

        const final = playRound(playerSelection, computerSelection);
        if (final === "Draw") {
            computerScore += 0;
            playerScore += 0;
        } else if (final === "You Win") {
            playerScore += 1;
        } else {
            computerScore += 1;
        }

        computerScoreText.textContent = `${computerScore}`;
        playerScoreText.textContent = `${playerScore}`;
        result.textContent = `${playRound(playerSelection, computerSelection)}`;
        
        console.log("Player Selection: " + playerSelection);
        console.log("Computer Selection: " + computerSelection);
        console.log("Results: " + playRound(playerSelection, computerSelection));
        console.log("");

        if (playerScore === 5) {
            if (playerScore === computerScore) {
                result.textContent = `You got same scores with Computer!`;
            } else if (playerScore > computerScore) {
                result.textContent = `You win with ${playerScore} scores`;
            } else {
                result.textContent = `Computer win with ${computerScore} scores`;
            };

            gameOver();
        }
    }));

    function gameOver() {
        playerScore = 0;
        computerScore = 0; 
    }

    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        switch(randomNumber) {
            case 1:
                computerSelection = "ROCK";
                break;
            case 2:
                computerSelection = "PAPER";
                break;
            case 3:
                computerSelection = "SCISSORS";
                break;
        }

        return computerSelection;
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
}