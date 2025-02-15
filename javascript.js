let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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
    let randomGuess = Math.floor(Math.random() * 3 +1);
    if (randomGuess == 1) {
        console.log("I choose Rock!");
        return "rock";
    } else if (randomGuess == 2) {
        console.log("I choose Paper!");
        return "paper";
    } else {
        console.log("I choose Scissors!");
        return "scissors";
    }
    // console.log(randomGuess);
};

function playRound(humanChoice, computerChoice) {
    let humanLower = humanChoice.toLowerCase();
    if (humanLower == computerChoice) {
        console.log("This game is a draw!")
    } else if (humanLower == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats Rock.")
        computerScore ++;
    } else if (humanLower == "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors.")
        humanScore ++;
    } else if (humanLower == "paper" && computerChoice == "rock") {
        console.log("You Win! Paper beats Rock.")
        humanScore ++;
    } else if (humanLower == "paper" && computerChoice == "scissors") {
        console.log("You Lose! Scissors beats Paper.")
        computerScore ++;
    } else if (humanLower == "scissors" && computerChoice == "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore ++;
    } else if (humanLower == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors beats Paper.")
        humanScore ++;
        return;
    }
};

function gameRound(choice) {
    const humanSelection = choice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Humanity: " + humanScore + " AI Overlords: " + computerScore);
}