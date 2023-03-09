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
  let playerName = prompt("Welcome to Rock, Paper, Scissors!\nPlease enter your name:");
  // set name to lowercase first
  playerName = playerName.toLowerCase();
  // then capitalise the 1st letter
  playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
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
    alert(`Invalid choice! We choose ${DEFAULT_PLAYER_CHOICE} for you!`);
    //return DEFAULT_PLAYER_CHOICE;
    return;
  }
  return playerSelection;
};

// GET COMPUTER CHOICE
const computerPlay = () => {
  for (i=0; i<3; i++) {
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
  playerSelection = DEFAULT_PLAYER_CHOICE
) => {
  if (computerSelection === playerSelection) {
    return ROUND_RESULT_DRAW; // will return global variable message ("it's a draw!")
  } else if (
    (computerSelection === ROCK && playerSelection === PAPER) ||
    (computerSelection === PAPER && playerSelection === SCISSORS) ||
    (computerSelection === SCISSORS && playerSelection === ROCK)
  ) {
    return ROUND_RESULT_PLAYER_WINS; // will return global variable message ("Yay! You win!")
  } else {
    return ROUND_RESULT_COMPUTER_WINS; // will return global variable message ("You lost! :(")
  }
};

// DISPLAY THE GLOBAL VARIABLE MESSAGE
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

// LOGIC TO START GAME
function startGame() {
  
  // ensure that once we started a game we cannot start another game
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  // start game by getting player name, then welcome them
  playerName = getPlayerName();
  // greet the player with their name
  alert(`Hi ${playerName}! The game has 5 rounds! Get ready ...`);  

  // THE GAME FUNCTION
  function game() {
    console.log(ASCII_ART);
    // set scores to 0;
    let playerScore = 0;
    let computerScore = 0;

    // loop the rounds 5 times
    for (let i = 0 ; i < 5; i++)  {
    
      // get player choice and console log it
      const playerSelection = getPlayerSelection();
      console.log(`${playerName} chose ${playerSelection}`);

      // get computer choice and console log it
      const computerSelection = computerPlay();
      console.log(`Computer chose ${computerSelection}`);

      // set round winner to undefined
      let roundWinner;

      // get round winner
      if (playerSelection) {
        roundWinner = playRound(computerSelection, playerSelection);
      } else {
        roundWinner = playRound(computerSelection);
      }
      // show round winner in the log
      console.log(roundWinner);
      // create a pop up alert for the player
      alert(getRoundWinnerMessage(roundWinner, playerSelection, computerSelection));

      // scoring logic
      if(roundWinner === ROUND_RESULT_DRAW){
        playerScore += 0; // if a draw, no points added
      }else if (roundWinner === ROUND_RESULT_PLAYER_WINS){
        playerScore++; // if player wins, add a point to player score
      }else if (roundWinner === ROUND_RESULT_COMPUTER_WINS){
        computerScore++; // if computer wins, add a point to computer score
      }
    }

    // comparing the final score
    const finalResult = () => {
      if (playerScore > computerScore) {
        console.log(`${playerName} wins the match!`) // if playerscore beats computerscore = win
      } else if (computerScore > playerScore) {
        console.log(`Better luck next time, ${playerName}. You lose.`) // if computerscore beats playerscore = lose
      } else
        console.log("It's a tie!")
        return finalResult; // if score is equal = tie
      }

    console.log(`Final result:\nComputer: ${computerScore}, ${playerName}: ${playerScore}`); // show player final scores
    finalResult(); // declare the winner

  }

  game();

  }

  gameIsRunning = false;

startGame();