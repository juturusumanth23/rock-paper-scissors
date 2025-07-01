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
    const div = document.querySelector("#scoreboard");
    const text = document.createElement("p");
    if(x == 'paper' && y == 'scissors') {
        computerScore += 1;
        text.textContent = `You lose! ${y} beats ${x}`;
        div.appendChild(text);
        const text2 = document.createElement("p");
        text2.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
        div.appendChild(text2);
    }
    else if (x < y) {
        humanScore += 1;
        text.textContent = `You win! ${x} beats ${y}`;
        div.appendChild(text);
        const text2 = document.createElement("p");
        text2.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
        div.appendChild(text2);
    }
    else if (x > y) {
        computerScore += 1;
        text.textContent = `You lose! ${y} beats ${x}`;
        div.appendChild(text);
        const text2 = document.createElement("p");
        text2.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
        div.appendChild(text2);
    }
    else {
        text.textContent = 'Tie';
        div.appendChild(text);
        const text2 = document.createElement("p");
        text2.textContent = `Your Score: ${humanScore} Computer Score ${computerScore}`;
        div.appendChild(text2);
    }
    if (humanScore==5 || computerScore==5) {
        const text3 = document.createElement("p");
        if (humanScore==5) {
            text3.textContent = "So, You are the Final Winner";
            div.appendChild(text3);
        }
        else {
            text3.textContent = "So, Computer is the Final Winner";
            div.appendChild(text3);
        }
        humanScore = 0;            
        computerScore = 0;
    }
}

const btnList = document.querySelectorAll("button");
btnList.forEach( (button) => {
    button.addEventListener("click", playRound)
});