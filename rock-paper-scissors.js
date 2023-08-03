//Declaring the funciton that will return a random result for the computer player
function getComputerChoice() {
    const results = ["rock","paper","scissors"];
    return results[Math.floor((Math.random() * results.length))];
}

//Declaring a function that will play a single round of the game. Takes the player's input and computer's input and returns the winner as a string
function gameRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "This round is a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        botScore += 1;
        return "You lose this round! Paper beats rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return "You win this round! Rock beats scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        botScore += 1;
        return "You lose this round! Scissors beats paper";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "You win this round! Paper beats rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        botScore += 1;
        return "You lose this round! Rock beats scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You win this round! Scissors beats paper";
    }
    else {
        return "No results, this shouldn't happen";
    }
}
function updateScores() {
    playerScoreContainer.textContent = "Player: " + playerScore;
    botScoreContainer.textContent = "Bot: " + botScore;
}
function afterRound() {
    gameRounds += 1;
    resultsTitle.textContent = "Results - Game " + gameRounds + "/5";
    if(gameRounds == 5) {
        document.querySelector("#rock_button").disabled = true;
        document.querySelector("#paper_button").disabled = true;
        document.querySelector("#scissors_button").disabled = true;

        if (playerScore > botScore) {
            endGame.textContent = "End of game! You won the match! Click Reset to play again.";
        }
        else if(botScore > playerScore) {
            endGame.textContent = "End of game! You lost the match! Click Reset to play again.";
        }
        else {
            endGame.textContent = "End of game! You tied the match! Click Reset to play again.";
        }
    }
}

let gameRounds = 0;
let playerScore = 0;
let botScore = 0;

const playerScoreContainer = document.querySelector('.player_score');
const botScoreContainer = document.querySelector('.bot_score');
const resultsTitle = document.querySelector('.results');
const resultsText = document.querySelector('.results_text');
const endGame = document.querySelector('.end_game');
const rockButton = document.querySelector('#rock_button');
const paperButton = document.querySelector('#paper_button');
const scissorsButton = document.querySelector('#scissors_button');
const resetButton = document.querySelector('#reset_button');

resetButton.addEventListener('click', () => {
    gameRounds = 0;
    playerScore = 0;
    botScore = 0;
    updateScores();
    document.querySelector("#rock_button").disabled = false;
    document.querySelector("#paper_button").disabled = false;
    document.querySelector("#scissors_button").disabled = false;
    resultsText.textContent = "";
    endGame.textContent = "";
    resultsTitle.textContent = "Results - Game 0/5";
  });

rockButton.addEventListener('click', () => {
    resultsText.textContent = gameRound("rock", getComputerChoice());
    afterRound();
    updateScores();
  });

paperButton.addEventListener('click', () => {
    resultsText.textContent = gameRound("paper", getComputerChoice());
    afterRound();
    updateScores();
  });

scissorsButton.addEventListener('click', () => {
    resultsText.textContent = gameRound("scissors", getComputerChoice());
    afterRound();
    updateScores();
  });
