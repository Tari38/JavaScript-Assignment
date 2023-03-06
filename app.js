// GLOBAL VARIABLES -----------------------------------------------------
let gameIsRunning = false;

let playerName;



// FUNCTIONS & GAME LOGIC ----------------------------------------------

function startGame() {
    // ensure that once we started a game we cannot start another game
    if (gameIsRunning) {
      return;
    }
    gameIsRunning = true;
  
    //console.log('Game is starting...');
    alert('Game is starting...');
  

  
    gameIsRunning = false;
  }
  
  startGame();