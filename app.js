// GLOBAL VARIABLES -----------------------------------------------------
let gameIsRunning = false;
let playerName;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const ROUND_RESULT_DRAW = 'DRAW';
const ROUND_RESULT_PLAYER_WINS = 'PLAYER WINS';
const ROUND_RESULT_COMPUTER_WINS = 'COMPUTER WINS';
const FINAL_RESULT_DRAW = ROUND_RESULT_DRAW;
const FINAL_RESULT_PLAYER_WINS = ROUND_RESULT_PLAYER_WINS;
const FINAL_RESULT_COMPUTER_WINS = ROUND_RESULT_COMPUTER_WINS;

// FUNCTIONS & GAME LOGIC ----------------------------------------------

const getPlayerSelection = () => {
  const playerSelection = prompt(
    `Choose ${ROCK}, ${PAPER} or ${SCISSORS}`,
    ''
  ).toUpperCase();
  switch (playerSelection) {
    case ROCK:
      return ROCK;
    case PAPER:
      return PAPER;
    case SCISSORS:
      return SCISSORS;
    default:
      alert(`Invalid choice! We choose ${DEFAULT_PLAYER_CHOICE} for you!`);
      //return DEFAULT_PLAYER_CHOICE if its none of the above;
      return DEFAULT_PLAYER_CHOICE;
  }
};

function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const win = `You Win! ${playerSelection} beats ${computerSelection}!`;
  const lose = `You Lose! ${computerSelection} beats ${playerSelection}!`;

  if (playerSelection === 'rock' && computerSelection === 'Scissors' ||
      playerSelection === 'paper' && computerSelection === 'Rock' ||
      playerSelection === 'scissors' && computerSelection === 'Paper') {
    return win;
  } else if (playerSelection === 'rock' && computerSelection === 'Paper' ||
             playerSelection === 'paper' && computerSelection === 'Scissors' ||
             playerSelection === 'scissors' && computerSelection === 'Rock') {
    return lose;
  } else {
    return `It's a tie! Both players chose ${playerSelection}!`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }

    console.log(`Round ${i}: ${result}`);
  }

  if (playerScore > computerScore) {
    console.log(`You win! Your score: ${playerScore}, Computer score: ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose! Your score: ${playerScore}, Computer score: ${computerScore}`);
  }
}
