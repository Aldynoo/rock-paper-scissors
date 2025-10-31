
function getComputerChoice() {
    let choice = (Math.random()* 100);

    if (choice < 33) {
        return "rock";
    }
    else if (choice < 6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(getComputerChoice());