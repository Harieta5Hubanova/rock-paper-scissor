const computerPlay = () => {
    let choices = ["rock", "paper", "scissors"]
    let selection = Math.floor(Math.random() * 3)
    return choices[selection]
}
  

const playRound = (playerSelection, computerSelection) => {
  const results = {
    "rock": {"rock": "tie", "paper": "lose", "scissors": "win"},
    "paper": {"rock": "win", "paper": "tie", "scissors": "lose"},
    "scissors": {"rock": "lose", "paper": "win", "scissors": "tie"}
  }
  let result = results[playerSelection.trim().toLowerCase()][computerSelection]
    return result
}

const game = () => {
  let count = 1;
  let pScore = 0;
  let cScore = 0;

  const selections = ["rock", "paper", "scissors"]

  while(count <= 5){

    let playerSelection = prompt("Choose: Rock, Paper or Scissor: ")

    if(!selections.includes(playerSelection.trim().toLowerCase())){
      console.log("[**WRONG CHOICE. Choose Rock, Paper or Scissors**] Toby interrupted.!\nToby: You can't be doing that during working hours.\nMichael: Why are you the way that you are?")
    }

    else{
      let computerSelection = computerPlay()
      let result = playRound(playerSelection, computerSelection)
      let statementChocie = Math.floor(Math.random()*3)
  
      if(result==="win"){
        console.log(`Round ${count}/5 [**WIN**] ==> You chose: ${playerSelection.trim().toLowerCase()}, Goldenface: ${computerSelection}.
        ${Object.keys(winStatements)[statementChocie]}
        ${winStatements[Object.keys(winStatements)[statementChocie]]}`)
        pScore++
        count++
      }
      else if(result==="tie"){
        console.log(`Round ${count}/5 [**TIE**] ==> You chose: ${playerSelection.trim().toLowerCase()}, Goldenface: ${computerSelection}.
        Toby: Hey Michael
        Michael: Not Now TOBY!`)
        count++
      }
      else{
        console.log(`Round ${count}/5 [**LOSE**] ==> You chose: ${playerSelection.trim().toLowerCase()}, Goldenface: ${computerSelection}.
        ${Object.keys(loseStatements)[statementChocie]}
        ${loseStatements[Object.keys(loseStatements)[statementChocie]]}`)
        cScore++
        count++
      }
    }

  }

  if(pScore>cScore){
    console.log(`WIN!!! Your score: ${pScore} Goldenface: ${cScore} Michael Scarn once again saved the world!!\nMichael: My name is Scarn and I'm here to say, I'm about to do the Scarn in a major way...`)
  }

  else if(pScore<cScore){
    console.log(`Ha ha!! Your score: ${pScore} Goldenface: ${cScore} You LOST!!!\nMichael: It's Toby's fault!`)
  }

  else{
    console.log("We tied!!")
  }
}

const winStatements = {
  "Goldenface: You win this time..": "Michael: I'm coming for you Golderface!",
  "Goldenface: This is not over yet..": "Michael: WHERE'S THE BOMB!?",
  "Goldenface: This is getting hard!": "Michael: That's what she said!"
}

const loseStatements = {
  "Goldenface: Ha ha! You'll die here Scarn!": "Michael: It'll take a lot more than a bullet to kill Michael Scarn",
  "Michael: I'm getting too old for this": "Billy: I know how to cheer you up, you gotta teach us How To Scarn!",
  "Samuel: Oh my motherboard.!": "Michael: Damn it Dwight!"
}

console.log("-".repeat(10) + "THREAT LEVEL MIDNIGHT" + "-".repeat(10))
console.log("Last time Michael Scarn was able to stop Goldenface from blowing up the stadium and defeat him.\nBut now, he is back and this time with an upgrade, as an AI!!"        
)
console.log("Once again, the world needs Scarn, Michael Scarn and his faithful robot butler Samuel!\nMichael: Looks like there's gonna be a cleanup on Aisle Five!")

game()