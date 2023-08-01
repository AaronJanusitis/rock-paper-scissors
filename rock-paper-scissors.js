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
        botScore += 1;
        return "You lose! Paper beats rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return "You win! Rock beats scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        botScore += 1;
        return "You lose! Scissors beats paper";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "You win! Paper beats rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        botScore += 1;
        return "You lose! Rock beats scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You win! Scissors beats paper";
    }
    else {
        return "No results, this shouldn't happen";
    }
}
function updateScores() {
    playerScoreContainer.textContent = "Player: " + playerScore;
    botScoreContainer.textContent = "Bot: " + botScore;
}

let gameRounds = 0;
let playerScore = 0;
let botScore = 0;

const playerScoreContainer = document.querySelector('.player_score');
const botScoreContainer = document.querySelector('.bot_score');
const resultsContainer = document.querySelector('.results');
const results = document.createElement('p');
const endGameContainer = document.querySelector('.end_game');
const endGame = document.createElement('p');

const rockButton = document.querySelector('#rock_button');
rockButton.addEventListener('click', () => {
    
    results.textContent = gameRound("rock", getComputerChoice());
    resultsContainer.appendChild(results);

    gameRounds += 1;
    if(gameRounds == 5) {
        endGame.textContent = "End of game!";
        endGameContainer.appendChild(endGame);
    }
    updateScores();
  });

const paperButton = document.querySelector('#paper_button');
paperButton.addEventListener('click', () => {
    results.textContent = gameRound("paper", getComputerChoice());
    resultsContainer.appendChild(results);

    gameRounds += 1;
    if(gameRounds == 5) {
        endGame.textContent = "End of game!";
        endGameContainer.appendChild(endGame);
    }
  });

const scissorsButton = document.querySelector('#scissors_button');
scissorsButton.addEventListener('click', () => {
    results.textContent = gameRound("scissors", getComputerChoice());
    resultsContainer.appendChild(results);

    gameRounds += 1;
    if(gameRounds == 5) {
        endGame.textContent = "End of game!";
        endGameContainer.appendChild(endGame);
    }
  });
