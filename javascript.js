function getComputerChoice() {
    let randomNumber = () => Math.floor(Math.random()*3)+1;
    let x = randomNumber();
    if (x == 1) {
        return "rock";
    }
    else if (x == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanchoice() {
    return prompt("Enter user input")
}

function playRound(humanChoice, computerChoice){
    let x = humanChoice.toLowerCase();
    let y = computerChoice.toLowerCase();
    if (x < y) {
        console.log(`You win! ${x} beats ${y}`);
        humanScore += 1;
    }
    else {
        console.log(`You lose! ${y} beats ${x}`);
        computerScore += 1;
    }
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanchoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);