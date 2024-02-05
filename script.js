// Your solution goes here 

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;
  
    while (guessCount < totalGuesses) {
      let userGuess = prompt(getPromptText());
      
      // If user presses Cancel, return 0
      if (userGuess == null) {
        return 0;
      }
  
      // Validate user input
      if (userGuess == "" || isNaN(userGuess)) {
        alert("Please enter a number.");
        continue;
      }
  
      userGuess = Number(userGuess);
      guessCount++;
  
      if (userGuess == numToGuess) {
        return guessCount;
      } else {
        alert(getFeedbackText(userGuess));
      }
    }
  
    return 0; // User ran out of guesses
  }
  
  function getPromptText() {
    return "Enter a number between 1 and 100.";
  }
  
  function getFeedbackText(userGuess) {
    if (userGuess < numToGuess) {
      return userGuess + " is too small. Guess a larger number.";
    } else {
      return userGuess + " is too large. Guess a smaller number.";
    }
  }
  
  // Example usage:
  let numToGuess1 = 5;
  let numToGuess2 = 7;
  
  let result1 = playGuessingGame(numToGuess1);
  console.log(result1);
  
  let result2 = playGuessingGame(numToGuess2, 3);
  console.log(result2);
  