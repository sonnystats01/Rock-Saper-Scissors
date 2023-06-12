// Function to generate computer's choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Function to update the game results on the web page
function updateResults(result, playerScore, computerScore) {
  const resultText = document.getElementById("result");
  const scoreText = document.getElementById("score");

  resultText.textContent = result;
  scoreText.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

// Function to start the game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerSelection = this.dataset.choice;
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      if (result === "You win!") {
        playerScore++;
      } else if (result === "You lose!") {
        computerScore++;
      }

      updateResults(result, playerScore, computerScore);
    });
  });
}

// Start the game
game();
