function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'tie';
    }
  
    const outcomes = {
      'rock': 'scissors',
      'paper': 'rock',
      'scissors': 'paper'
    };
  
    if (outcomes[playerSelection] === computerSelection) {
      return 'player';
    } else {
      return 'computer';
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    if (!playerSelection) {
      console.error("Invalid input, please type Rock, Paper, or Scissors");
      return;
    }
  
    playerSelection = playerSelection.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
      console.error("Invalid input. Please enter Rock, Paper, or Scissors.");
      return;
    }
  
    console.log(`You chose ${playerSelection}.`);
    console.log(`Computer chose ${computerSelection}.`);
  
    const winner = determineWinner(playerSelection, computerSelection);
  
    if (winner === 'player') {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (winner === 'computer') {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      return "It's a tie!";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; ) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
  
      if (result) {
        console.log(result);
  
        if (result.includes("win")) {
          playerScore++;
        } else if (result.includes("lose")) {
          computerScore++;
        }
  
        i++;
      } else {
        console.error("Invalid input. Please try again.");
      }
    }
  
    console.log(`Game over! Your score: ${playerScore}, Computer's score: ${computerScore}.`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry! You lose the game.");
    } else {
      console.log("It's a tie overall!");
    }
  }
  
  game();
