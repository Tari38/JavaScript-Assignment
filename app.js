// GLOBAL VARIABLES -----------------------------------------------------
let gameIsRunning = false;
let playerName;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;

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
  console.log(playerSelection);
  
    gameIsRunning = false;
  }
  
  startGame();