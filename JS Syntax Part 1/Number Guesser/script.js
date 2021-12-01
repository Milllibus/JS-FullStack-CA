let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// This function should return a random integer between 0 and 9.
const generateTarget = () => Math.floor(Math.random()*10); 


/* This function:

    - Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
    - Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
    - Return true if the human player wins, and false if the computer player wins.
*/
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    checkUserGuess(userGuess);
    const userPoint = getAbsoluteDistance(secretTarget, userGuess);
    const computerPoint = getAbsoluteDistance(secretTarget, computerGuess);
    if (userPoint < computerPoint || userPoint === computerPoint) return true;
    else return false;
};

/* This function:

    - Has a single parameter. This parameter will be a string value representing the winner.
    - Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
    - Does not need to return any value.
*/
const updateScore = winner => winner === 'human' ? humanScore ++ : computerScore ++;
    

// This function will be used to update the round number after each round.
const advanceRound = () => currentRoundNumber +=1;

const checkUserGuess = (guess) => {
    if(guess < 0 || guess > 9){ //edited this as I pasted the wrong code earlier
        window.alert("Please make sure your guess is between 0 and 9");

    }
};

// This function that takes two numbers and returns the distance
const getAbsoluteDistance = (target, guess) => Math.abs(target-guess);