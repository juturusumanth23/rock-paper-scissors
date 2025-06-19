function getComputerChoice() {
    let randomNumber = () => Math.floor(Math.random()*3)+1;
    x = randomNumber();
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