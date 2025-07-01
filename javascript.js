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

let humanScore = 0;
let computerScore = 0;

function playRound(event){
    const x = event.target.id
    const y = getComputerChoice();
    const div = document.querySelector("#scoreboard") 
    if(x == 'paper' && y == 'scissors') {
        div.textContent = `You lose! ${y} beats ${x}`;
        div.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
        computerScore += 1;
    }
    else if (x < y) {
        div.textContent = `You win! ${x} beats ${y}`;
        div.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
        humanScore += 1;
    }
    else if (x > y) {
        div.textContent = `You lose! ${y} beats ${x}`;
        div.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
        computerScore += 1;
    }
    else {
        div.textContent = 'Tie';
        div.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
    }
    if (humanScore==5 || computerScore==5) {
        if (humanScore==5) {
            div.textContent = "So, You are the Final Winner";
        }
        else {
            div.textContent = "So, Computer is the Final Winner";
        }
    }
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     let humanChoice = getHumanchoice;
//     let computerChoice = getComputerChoice;
//     for (i=0; i<5; i++) {
//         let result = playRound(humanChoice(), computerChoice());
//         if(result == 1) {
//             humanScore += 1;
//         }
//         else if(result == 0) {
//             computerScore += 1;
//         }
//     }
//     console.log(`Your Score at the end of the game is '${humanScore}'`);
//     console.log(`Computer Score at the end of the game is '${computerScore}'`);
//     if (humanScore > computerScore) {
//         return "So, You are the Final Winner";
//     }
//     else {
//         return "So, Computer is the Final Winner";
//     }
// }
// console.log(playGame());

const btnList = document.querySelectorAll("button");
btnList.forEach( (button) => {
    button.addEventListener("click", playRound)
});