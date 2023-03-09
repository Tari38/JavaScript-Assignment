# JavaScript Assignment
  ‘Rock’, ‘Paper’ or ‘Scissors’  Game

## Important - all devs to use the following:

### Variables

- NO VARs! Use only `let` and `const`

### Comments

- Try to add comments throughout your code. This will help others understand what is happening.

### Naming Conventions

- Global Variables
  - Use UpperCase for const:  
      Example:  
        `const ROCK = 'ROCK';`  
        `const ROUND_RESULT_DRAW = 'DRAW';`  

  - Use camelCase for let variables:  
      Example:  
        `let playerName;`

  - Functions: Use camelCase:  
      Example: 
        `startGame();`
- 


## Provided Assignment Rules

1.  The game will begin using a function called `computerPlay()`. This function will randomly return either "Rock", "Paper" or "Scissors".  
2.  Make sure the code works before continuing!  
3.  Create another function that can play a single round. It's two parameters are:  
  - playerSelection
  - computerSelection
4. Return a string after each round. e.g:
  `"You Lose! Paper beats Rock!"`
5.  Make sure the playerSelection parameter is case-insensative (so users can input rock, ROCK, RocK etc).
6. `return` the results of this function call. Don't return using console.log. Test the function using console.log to see the results.  

**add image here from pdf**

7. Create a new function called `game()`. Call the playRound function (*shown in the image above*), inside the game() function, to play 5 rounds and keep score. This will return a winner or loser at the end.  
  - Remember to use `console.log()` to display the results of each round and the winner at the end.
  - Use `prompt()` to get a users input.  


### Possible Outcomes

1.  **Rock Beats Scissors**
2.  **Scissors Beats Paper**  
3.  **Paper Beats Rock**
4.  **It's a Draw!**

