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
  if (
    playerSelection !== ROCK &&
    playerSelection !== PAPER &&
    playerSelection !== SCISSORS
  ) {
    alert(`Invalid choice! We choose ${DEFAULT_PLAYER_CHOICE} for you!`);
    //return DEFAULT_PLAYER_CHOICE;
    return;
  }
  return playerSelection;
};

const computerPlay = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//TODO:
//use this function to loop 5 times in the game and store the result of each round to get the final result
const playRound = (
  computerSelection,
  playerSelection = DEFAULT_PLAYER_CHOICE
) => {
  if (computerSelection === playerSelection) {
    return ROUND_RESULT_DRAW;
  } else if (
    (computerSelection === ROCK && playerSelection === PAPER) ||
    (computerSelection === PAPER && playerSelection === SCISSORS) ||
    (computerSelection === SCISSORS && playerSelection === ROCK)
  ) {
    return ROUND_RESULT_PLAYER_WINS;
  } else {
    return ROUND_RESULT_COMPUTER_WINS;
  }
};


const getRoundWinnerMessage = (
    roundWinner,
    playerSelection,
    computerSelection
  ) => {
    let message = `You picked ${
      playerSelection || DEFAULT_PLAYER_CHOICE
    }, computer picked ${computerSelection}, therefore `;
  
    if (roundWinner === ROUND_RESULT_DRAW) {
      return message + ROUND_RESULT_DRAW;
    } else if (roundWinner === ROUND_RESULT_PLAYER_WINS) {
      return message + ROUND_RESULT_PLAYER_WINS;
    } else {
      return message + ROUND_RESULT_COMPUTER_WINS;
    }
  };

function startGame() {
  // ensure that once we started a game we cannot start another game
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  //console.log('Game is starting...');
  alert('Game is starting...');

  //TODO:
  //- insert function to ask the player name and save it
  //- insert function to greet the player with is name

  const playerSelection = getPlayerSelection();
  //console.log(playerSelection);

  const computerSelection = computerPlay();
  //console.log(computerSelection);

  let roundWinner;

  if (playerSelection) {
    roundWinner = playRound(computerSelection, playerSelection);
  } else {
    roundWinner = playRound(computerSelection);
  }

  //console.log(roundWinner);

  alert(getRoundWinnerMessage(roundWinner, playerSelection, computerSelection));

  //TODO:
  //use the playRound() function to loop 5 times in the game and store the result of each round to get the final winer result

  gameIsRunning = false;
}

startGame();
