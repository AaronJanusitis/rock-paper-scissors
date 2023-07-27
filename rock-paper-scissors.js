//Declaring the funciton that will return a random result for the computer player
function getComputerChoice() {
    const results = ["rock","paper","scissors"];
    return results[Math.floor((Math.random() * results.length))];
}

//Declaring a function that will play a single round of the game. Takes the player's input and computer's input and returns the winner as a string
function gameRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper";
    }
    else {
        return "No results, this shouldn't happen";
    }
}

const rockButton = document.querySelector('#rock_button');
rockButton.addEventListener('click', () => {
    console.log(gameRound("rock", getComputerChoice()));
  });

const paperButton = document.querySelector('#paper_button');
paperButton.addEventListener('click', () => {
    console.log(gameRound("paper", getComputerChoice()));
  });

const scissorsButton = document.querySelector('#scissors_button');
scissorsButton.addEventListener('click', () => {
    console.log(gameRound("scissors", getComputerChoice()));
  });
