// Your solution goes here

function playGuessingGame(numToGuess, totalGuesses = 10){
  let promtpText = "Enter a number between 1 and 100";

//this section will be for the loop. The pre-code I give you will check to see if you will check to see if a user does not enter anything
//or if a user types in something that is not a number

for (let guesses = 1; guesses < totalGuesses; guesses++) {}
  let num = prompt(promptText);
  
  //check if the user does not enter anything... if the enter nothing it exits 
  
if (num === null){
  return 0
}

//checks to see if the value they entered is a number

else if (num === "" || isNana(num)) {
  promptText = "Please enter a number."; 
  guesses = guesses - 1;
} else {
      num = parseInt(num, 10);

//TODO: if the num equal numToGuess then it will return guesses

  if (num === numToGuess) {
        return guesses;
  }

//TODO: if num < numToGuesses promptext changes to is to small guess larger number

  else if (num < numToGuess) {
        promptText = num + " is too small. Guess a larger number.";
  }

//TODO: if num to large promptext changes to is too large guess smaller number
else {
        promptText = num + " is too large. Guess a smaller number.";
      }
}

//TODO: before closing the function return 0
turn 0;
  
}


