let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// function returns a random integer between 0 and 9.
//Function will be called at the start of each new round in order to generate the new secret number.
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};


//function called each round to determine which guess is closest to the secret number.
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  const humanDifference = Math.abs(secretNumber - humanGuess);
  const computerDifference = Math.abs(secretNumber - computerGuess);
  return humanDifference <= computerDifference;
};

//this function is used to increase the winner's score after each round.
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

//this function is used to update the round number after each round.
const advanceRound = () => currentRoundNumber++;
