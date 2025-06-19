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
    if(x == 'paper' && y == 'scissors') {
        console.log(`You lose! ${y} beats ${x}`);
        return 0;        
    }
    else if (x < y) {
        console.log(`You win! ${x} beats ${y}`);
        return 1;
    }
    else if (x > y) {
        console.log(`You lose! ${y} beats ${x}`);
        return 0;
    }
    else {
        console.log('Tie');
        return 2;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = getHumanchoice;
    let computerChoice = getComputerChoice;
    for (i=0; i<5; i++) {
        let result = playRound(humanChoice(), computerChoice());
        if(result == 1) {
            humanScore += 1;
        }
        else if(result == 0) {
            computerScore += 1;
        }
    }
    console.log(`Your Score at the end of the game is '${humanScore}'`);
    console.log(`Computer Score at the end of the game is '${computerScore}'`);
    if (humanScore > computerScore) {
        return "So, You are the Final Winner";
    }
    else {
        return "So, Computer is the Final Winner";
    }
}
console.log(playGame());