// GLOBAL VARIABLES -----------------------------------------------------
let gameIsRunning = false;
let playerName;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const ROUND_RESULT_DRAW = 'It\'s a draw!';
const ROUND_RESULT_PLAYER_WINS = 'Yay! You win!';
const ROUND_RESULT_COMPUTER_WINS = 'You lost! :(';
const FINAL_RESULT_DRAW = ROUND_RESULT_DRAW;
const FINAL_RESULT_PLAYER_WINS = ROUND_RESULT_PLAYER_WINS;
const FINAL_RESULT_COMPUTER_WINS = ROUND_RESULT_COMPUTER_WINS;


// FUNCTIONS & GAME LOGIC ----------------------------------------------
const getPlayerName = () => {
  // get the players name and capitalise the first letter if needed
  let playerName = prompt("Welcome to Rock, Paper, Scissors!\nPlease enter your name:");
  // set name to lowercase first
  playerName = playerName.toLowerCase();
  // then capitalise the 1st letter
  playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);

  return playerName;
  
};

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
    }, computer picked ${computerSelection}. Result:\n `;
  
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

  // start game by getting player name, then welcome them
  playerName = getPlayerName();
  // greet the player with their name
  alert(`Hi ${playerName}! Get ready ...`);  

  function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0 ; i < 5; i++){
    const playerSelection = getPlayerSelection();
    console.log(`${playerName} chose ${playerSelection}`);

    const computerSelection = computerPlay();
    console.log(`Computer chose ${computerSelection}`);

    let roundWinner;

    if (playerSelection) {
      roundWinner = playRound(computerSelection, playerSelection);
    } else {
      roundWinner = playRound(computerSelection);
    }

    console.log(roundWinner);

    alert(getRoundWinnerMessage(roundWinner, playerSelection, computerSelection));

    if(roundWinner === ROUND_RESULT_DRAW){
      playerScore += 0;
    }else if (roundWinner === ROUND_RESULT_PLAYER_WINS){
      playerScore++;
    }else if (roundWinner === ROUND_RESULT_COMPUTER_WINS){
      computerScore++;
    }
  }

    const finalResult = () => {
      if (playerScore > computerScore) {
        console.log(`${playerName} wins the match!`)
      } else if (computerScore > playerScore) {
        console.log(`Better luck next time, ${playerName}. You lose.`)
      } else
        console.log("It's a tie!")
        return finalResult;
      }

    console.log(`Final result:\nComputer: ${computerScore}, ${playerName}: ${playerScore}`);
    finalResult();

  }

  game();

  }

  gameIsRunning = false;

startGame();