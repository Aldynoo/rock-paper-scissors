

function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice < 0,33) {
        return "rock";
    } else if (computerChoice < 0,66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());


function getHumanChoice () {
    let humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'");

    return humanChoice;
}
console.log(getHumanChoice());




function playGame () {
    let humanScore = 0;
    let computerScore = 0;


    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie";
    } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
            ){
                return "You win!";
            } else {
            return "You lose!";
        }
    }

    if ("You win!") {
        return humanScore++;
    }
    else if ("You lose!") {
        return computerScore++;
    }
console.log(playRound());
console.log(`You won ${humanScore} times and computer won ${computerScore} times.`);

    
}
console.log(playGame());