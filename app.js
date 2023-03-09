// GLOBAL VARIABLES -----------------------------------------------------

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_SELECTION = ROCK;
const DEFAULT_PLAYER_NAME = 'PLAYER';
const ROUND_RESULT_DRAW = 'It\'s a draw!';
const ROUND_RESULT_PLAYER_WINS = 'Yay! You win!';
const ROUND_RESULT_COMPUTER_WINS = 'You lost! :(';
const FINAL_RESULT_DRAW = ROUND_RESULT_DRAW;
const FINAL_RESULT_PLAYER_WINS = ROUND_RESULT_PLAYER_WINS;
const FINAL_RESULT_COMPUTER_WINS = ROUND_RESULT_COMPUTER_WINS;

let playerName = '';
let gameIsRunning = false;

// set scores to 0;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const ASCII_ART = `
⠀⠀⠀⠀⠀⣠⡴⠖⠒⠲⠶⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠖⠒⢶⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⠁⠀⣀⠔⠁⠀⠀⠈⠙⠷⣤⠦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀
⣠⠞⠛⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠘⢧⠈⢿⡀⢠⡶⠒⠳⠶⣄⠀⠀⠀⠀⠀⣴⠟⠁⠀⠀⠀⣰⠏⠀⢀⣤⣤⣄⡀⠀⠀
⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠛⠛⠃⠸⡇⠈⣇⠸⡇⠀⠀⠀⠘⣇⠀⠀⣠⡾⠁⠀⠀⠀⢀⣾⣣⡴⠚⠉⠀⠀⠈⠹⡆⠀
⣹⡷⠤⠤⠤⠄⠀⠀⠀⠀⢠⣤⡤⠶⠖⠛⠀⣿⠀⣿⠀⢻⡄⠀⠀⠀⢻⣠⡾⠋⠀⠀⠀⠀⣠⡾⠋⠁⠀⠀⠀⠀⢀⣠⡾⠃⠀
⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡤⠖⠋⢀⣿⣠⠏⠀⠀⣿⠀⠀⠀⠘⠉⠀⠀⠀⠀⠀⡰⠋⠀⠀⠀⠀⠀⣠⠶⠋⠁⠀⠀⠀
⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠁⠀⠀⠠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠁⠀⠀⠀⢀⣴⡿⠥⠶⠖⠛⠛⢶⡄
⠀⠉⢿⡋⠉⠉⠁⠀⠀⠀⠀⠀⢀⣠⠾⠋⠀⠀⠀⠀⢀⣰⡇⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⢀⣠⠼⠃
⠀⠀⠈⠛⠶⠦⠤⠤⠤⠶⠶⠛⠋⠁⠀⠀⠀⠀⠀⠀⣿⠉⣇⠀⡴⠟⠁⣠⡾⠃⠀⠀⠀⠀⠀⠈⠀⠀⠀⣀⣤⠶⠛⠉⠀⠀⠀
⠀⠀⠀⠀⢀⣠⣤⣀⣠⣤⠶⠶⠒⠶⠶⣤⣀⠀⠀⠀⢻⡄⠹⣦⠀⠶⠛⢁⣠⡴⠀⠀⠀⠀⠀⠀⣠⡶⠛⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⡴⠋⣠⠞⠋⠁⠀⠀⠀⠀⠙⣄⠀⠙⢷⡀⠀⠀⠻⣄⠈⢷⣄⠈⠉⠁⠀⠀⠀⢀⣠⡴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⡾⠁⣴⠋⠰⣤⣄⡀⠀⠀⠀⠀⠈⠳⢤⣼⣇⣀⣀⠀⠉⠳⢤⣭⡿⠒⠶⠶⠒⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢸⠃⢰⠇⠰⢦⣄⡈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠛⠛⠓⠲⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠸⣧⣿⠀⠻⣤⡈⠛⠳⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠹⣆⠀⠈⠛⠂⠀⠀⠀⠀⠀⠀⠈⠐⠒⠒⠶⣶⣶⠶⠤⠤⣤⣠⡼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠹⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⣦⣀⠀⠀⠀⠀⠐⠲⠤⣤⣀⡀⠀⠀⠀⠀⠀⠉⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠶⠤⠤⠤⠶⠞⠋⠉⠙⠳⢦⣄⡀⠀⠀⠀⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠳⠦⠾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`

// FUNCTIONS & GAME LOGIC ----------------------------------------------

// GET PLAYERS NAME
const getPlayerName = () => {
  // get the players name and capitalise the first letter if needed
  playerName = prompt(
    'Welcome to Rock, Paper, Scissors!\nPlease enter your name:'
  );
  // set name to lowercase first
  playerName = playerName.toLowerCase();
  // then capitalise the 1st letter
  playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);

  if (!playerName) {
    alert(`Invalid choice! We choose ${DEFAULT_PLAYER_NAME} name for you!`);
    return (playerName = DEFAULT_PLAYER_NAME);
  }

  return playerName;
};

// GET PLAYER CHOICE
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
    // console.log(
    //   `Invalid choice! We choose ${DEFAULT_PLAYER_SELECTION} for you!`
    // );
    alert(`Invalid choice! We choose ${DEFAULT_PLAYER_SELECTION} for you!`);

    return DEFAULT_PLAYER_SELECTION;
  }
  return playerSelection;
};

// GET COMPUTER CHOICE
const computerPlay = () => {
  for (i = 0; i < 3; i++) {
    const randomValue = Math.floor(Math.random() * 3);
    if (randomValue === 0) {
      return ROCK;
    } else if (randomValue === 1) {
      return PAPER;
    } else {
      return SCISSORS;
    }
  }
};

// LOGIC TO PLAY A SINGLE ROUND
const playRound = (
  computerSelection,
  playerSelection = DEFAULT_PLAYER_SELECTION
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
  roundWinner
) => {  
  if (roundWinner === ROUND_RESULT_DRAW) {
    return ROUND_RESULT_DRAW;
  } else if (roundWinner === ROUND_RESULT_PLAYER_WINS) {
    return ROUND_RESULT_PLAYER_WINS;
  } else 
    return ROUND_RESULT_COMPUTER_WINS;
};

// Play the 5 rounds
function game() {

  console.log(ASCII_ART);

  let roundCounter = 1;
    
  // loop the rounds 5 times
  for (let i = 0; i < 5; i++) {
    //counting rounds
    roundCounter = 'ROUND ' + (i + 1);

    // get player choice and console log it
    const playerSelection = getPlayerSelection();
    console.log(`${playerName} chose ${playerSelection || DEFAULT_PLAYER_SELECTION}`);
    // alert(`${playerName} chose ${playerSelection || DEFAULT_PLAYER_SELECTION}`);

    // get computer choice and console log it
    const computerSelection = computerPlay();
    console.log(`Computer chose ${computerSelection}`);
    // alert(`Computer chose ${computerSelection}`);

    let roundWinner;

    // get round winner
    if (playerSelection) {
      roundWinner = playRound(computerSelection, playerSelection);
    } else {
      roundWinner = playRound(computerSelection);
    }
    // show round winner in the log
    // console.log(roundWinner);
    // alert(roundWinner);

    // create a pop up alert for the player
    console.log(
      roundCounter +
        ': \n' +
        getRoundWinnerMessage(roundWinner, playerSelection, computerSelection)
    );
    alert(
      roundCounter +
        ': \n' +
        getRoundWinnerMessage(roundWinner, playerSelection, computerSelection)
    );

    // scoring logic
    if (roundWinner === ROUND_RESULT_DRAW) {
      drawScore++; // if a draw, no points added
    } else if (roundWinner === ROUND_RESULT_PLAYER_WINS) {
      playerScore++; // if player wins, add a point to player score
    } else if (roundWinner === ROUND_RESULT_COMPUTER_WINS) {
      computerScore++; // if computer wins, add a point to computer score
    }
  }
}

// comparing the final score
function finalResult() {
  if (playerScore > computerScore) {
    console.log(`${playerName} wins the match!`); // if playerscore beats computerscore = win
    alert(`${playerName} wins the match!`);
  } else if (computerScore > playerScore) {
    console.log(`Better luck next time, ${playerName}. You lose.`); // if computerscore beats playerscore = lose
    alert(`Better luck next time, ${playerName}. You lose.`);
  } else {
    console.log("It's a draw!");
    alert("It's a draw!");
  }
}

// show player final scores
function finalScores() {
  console.log(
    `Final result:\nComputer: ${computerScore}, ${playerName}: ${playerScore}, Draws: ${drawScore}`
    );
    alert(
      `Final result:\nComputer: ${computerScore}, ${playerName}: ${playerScore}, Draws: ${drawScore}`
      );
    finalResult();
}

function startGame() {
  // ensure that once we started a game we cannot start another game
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  // start game by getting player name, then welcome them
  playerName = getPlayerName();
  // greet the player with their name
  // console.log(`Hi ${playerName}! The game has 5 rounds! Get ready ...`);
  alert(`Hi ${playerName}! The game has 5 rounds! Get ready ...`);

  game();

  finalScores();
  
  // finalResult();

  gameIsRunning = false;
}

startGame();