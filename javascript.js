let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = (Math.random()* 100);

    if (computerChoice < 33) {
        return "rock";
    } else if (computerChoice < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());


function getHumanChoice () {
    let humanChoice = parseInt(prompt("Enter 1 for 'rock', 2 for 'paper' or 3 for 'scissors'"));

    if (humanChoice === 1) {
        return "rock";
    } else if (humanChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getHumanChoice());


function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie";
    }
    else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
            ){
                return "You win!"
            }
    else 
        {
            return "You lose!"
        }
    }
console.log(playRound());