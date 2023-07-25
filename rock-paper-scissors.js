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

//Declaring the game whoch is 5 rounds
function game() {
    //Looping 5 times
    for (let i = 0; i < 5; i++) {
        let check = false;
        //Doing input check loop to make sure the user inputs a correct argument
        do {
            userInput = prompt("Enter your choice of rock, paper, or scissors:");
            userInput = userInput.toLowerCase();
            if (userInput == 'paper' || userInput == 'rock' || userInput == 'scissors') {
                check = true;
            }
            else {
                console.log("Please enter either \"rock\", \"paper\", or \"scissors\".");
            }
        }
        while (check == false)

        //Using the gameRound function with the validated user input and getComputerChoice() function
        console.log(gameRound(userInput, getComputerChoice()));
    }
}

game();
