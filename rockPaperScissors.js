const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log("error");
    }
  };
  
  function getComputerChoice() {
    let nr = Math.floor(Math.random()*3);
    if (nr === 0) {
      return 'rock';
    } else if (nr === 1) {
      return 'paper';
    } else if (nr === 2) {
      return 'scissors';
    }
  }
  console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Tie";
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "PC won :(";
        } else {
          return "you won!";
        }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "PC won :(";
        } else {
          return "you won!";
        }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "PC won :(";
        } else {
          return "you won!";
        }
  } else if (userChoice === 'bomb') {
    return "you won!";
  }
  };
  
  function playGame() {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice + ' and the PC threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
  