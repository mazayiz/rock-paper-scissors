let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomGuess = Math.floor(Math.random() * 3 +1);
    if (randomGuess == 1) {
        console.log("I choose Rock!");
    } else if (randomGuess == 2) {
        console.log("I choose Paper!");
    } else {
        console.log("I choose Scissors!");
    }
    console.log(randomGuess);
};

function  getHumanChoice() {
    let human = prompt("Rock, Paper, Scissors?")
    console.log(human)
};

function playRound(humanChoice, computerChoice) {
    let upperCaseStr = str.toUpperCase();
}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);