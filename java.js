// Computer randomizes an answer //


const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
  

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() *3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                    result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                    break;
            case "scissors":
                    result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                    break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

    }
}



















//play a round
/* button.addEventListener('click', ()=> {


}
function playRound(playerSelection, ComputerChoice) {
    let result = "";

    if(playerSelection === ComputerChoice){
        result = "It's a tie!";
    }
    else {
        switch(playerSelection){
            case "rock" :
                result = (ComputerChoice === "Scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper" :
                result = (ComputerChoice === "Rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors" :
                result = (ComputerChoice === "Paper") ? "You Win!" : "You Lose!";
                break;
         }
    
    playerDisplay.textContent = "PLAYER"; */