let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultsDisplay = document.querySelector("#results");
const score = document.querySelector("#score");

rock.addEventListener("click", () => {
    gameRound("rock");
});
paper.addEventListener("click", () => {
    gameRound("paper");
});
scissors.addEventListener("click", () => {
    gameRound("scissors");
});

function getComputerChoice() {
    let randomGuess = Math.floor(Math.random() * 3);
    console.log(randomGuess);
    if (randomGuess == 0) {
        // console.log("Computer chose Rock!");
        return "rock";
    } else if (randomGuess == 1) {
        // console.log("Computer chose Paper!");
        return "paper";
    } else {
        // console.log("Computer chose Scissors!");
        return "scissors";
    }
};

function playRound(humanChoice, computerChoice) {
    let humanLower = humanChoice.toLowerCase();
    if (humanLower == computerChoice) {
        resultsDisplay.textContent = "This game is a draw!"
    } else if (humanLower == "rock" && computerChoice == "paper") {
        resultsDisplay.textContent = "You Lose! Paper beats Rock."
        computerScore ++;
    } else if (humanLower == "rock" && computerChoice == "scissors") {
        resultsDisplay.textContent = "You Win! Rock beats Scissors."
        humanScore ++;
    } else if (humanLower == "paper" && computerChoice == "rock") {
        resultsDisplay.textContent = "You Win! Paper beats Rock."
        humanScore ++;
    } else if (humanLower == "paper" && computerChoice == "scissors") {
        resultsDisplay.textContent = "You Lose! Scissors beats Paper."
        computerScore ++;
    } else if (humanLower == "scissors" && computerChoice == "rock") {
        resultsDisplay.textContent = "You Lose! Rock beats Scissors"
        computerScore ++;
    } else if (humanLower == "scissors" && computerChoice == "paper") {
        resultsDisplay.textContent = "You Win! Scissors beats Paper."
        humanScore ++;
    }
};

function gameRound(choice) {
    const humanSelection = choice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    // console.log("Humanity: " + humanScore + " AI Overlords: " + computerScore);
    score.textContent = "Humanity: " + humanScore + " AI Overlords: " + computerScore;
    if (humanScore === 5) {
        alert("You have won! Skynet is destroyed!")
    } else if (computerScore === 5) {
        alert("Humanity has lost. You failed! Thanks loser.")
    }
}