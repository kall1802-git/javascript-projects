const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput
    } else {
      console.log('Error: invalid user input!');
    }
  }
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie.';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    }
  
    if (userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    }
  }
  
  function playGame(inUserChoice) {
    const userChoice = getUserChoice(inUserChoice);
    console.log(`User choice: ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame('rock');
  