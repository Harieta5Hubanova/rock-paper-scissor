// --- GENERATE COMPUTER'S CHOICES ---

const computerPlay = () => {
    let choices = ["rock", "paper", "scissors"]
    let selection = Math.floor(Math.random() * 3)
    return choices[selection]
  }
  
  
  // --- TAKES PLAYER'S AND COMPUTER'S SELECTIONS AND GIVE A TO game() FUNCTION ---
  
  const playRound = (playerSelection, computerSelection) => {
  
    // Object(dictionary), which holds key-value pairs.
    // The keys are player's choices, and the values are another dictionary,
    // which holds the result based on the player and computer's choices.
    // For eg. if the player chose rock, it will get the dictionary attached to the 'rock' key,
    // which have {"rock": "tie", "paper": "lose", "scissors": "win"}. Now based on computer's choice,
    // it will return a result value. For eg, if the computer chose "paper", it will look for the value attached to
    // "paper" inside this second dictionary and return "lose".
  
    const results = {
  
      "rock": {"rock": "tie", "paper": "lose", "scissors": "win"},
      "paper": {"rock": "win", "paper": "tie", "scissors": "lose"},
      "scissors": {"rock": "lose", "paper": "win", "scissors": "tie"}
  
    }
  
    // this statement gets the result from the "results" dictionary above.
    // "if" statement is not required here, as I put it initially to check the user's imput is correct,
    // however, that is being done in the game() fucntion now, so this "if" can be removed.
  
    if(Object.keys(results).includes(playerSelection.toLowerCase())){
      // here, we are first going to the "results" dictionary, and finding the "key" which is player's choice,
      // and get the value attached to it, which is another dictionary.
      // Now, in this second dictionary, we are looking for a key which is computer's choice and returning the 
      // value attached to it, which will be our result.
  
      let result = results[playerSelection.toLowerCase()][computerSelection]
      return result
    }
  
    // this else is not needed anymore, as we are checking the user input prior to sending it here.
    else{
      return("Wrong input")
    }
  
  }
  
  const game = () => {
  
    let count = 1; // this is going to be our rounds.
    let pScore = 0; //this is player's score.
    let cScore = 0; //this is computer's score.
  
    const selections = ["rock", "paper", "scissors"] //this is to check the user's input
  
    while(count <= 5){
  
      let playerSelection = prompt("Choose: Rock, Paper or Scissor: ") //getting the value from the user.
  
      // this is checking if the user's input is correct
      if(!selections.includes(playerSelection.toLowerCase())){
        console.log("Wrong selection. Please choose from the given options of Rock, Paper or Scissors")
      }
  
      else{
        let computerSelection = computerPlay() //getting computer's value.
        let result = playRound(playerSelection, computerSelection) // sending the choices to playRound() function and get the result.
    
        if(result==="win"){
          console.log(`Round ${count}/5 ==> You chose: ${playerSelection.toLowerCase()}, I chose: ${computerSelection}. You win this round!`)
          pScore++ //incrementing the player's score if player won.
          count++ //incrementing the round count
        }
        else if(result==="tie"){
          console.log(`Round ${count}/5 ==> You chose: ${playerSelection.toLowerCase()}, I chose: ${computerSelection}. It's a tie...`)
          count++
        }
        else{
          console.log(`Round ${count}/5 ==> You chose: ${playerSelection.toLowerCase()}, I chose: ${computerSelection}. I won!!!`)
          cScore++ //incrementing the computer's score
          count++
        }
      }
  
    }
  
    // will display the final result once the loop ends after 5 rounds depending on the scores.
    if(pScore>cScore){
      console.log("You won the game.")
    }
  
    else if(pScore<cScore){
      console.log("You LOST!!!")
    }
  
    else{
      console.log("We tied!!")
    }
  
  }
  
  // let playerSelection = prompt("Choose: Rock, Paper or Scissor: ")
  // let computerSelection = computerPlay()
  
  game()