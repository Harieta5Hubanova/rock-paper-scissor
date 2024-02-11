const computerPlay = () => {
    let choices = ["rock", "paper", "scissors"]
    let selection = Math.floor(Math.random() * 3)
    return choices[selection]
}

const playerSelection = () => {

  const selections = ["rock", "paper", "scissors"]
  let pSelection = prompt("Your move Scarn: Rock, Paper or Scissor?")

  if(pSelection === null){
    let confirmQuit = confirm("Giving up so easily Scarn?")
    return confirmQuit===true?"quit":playerSelection()
  }

  if(!selections.includes(pSelection.trim().toLowerCase())){
    console.log("[**WRONG CHOICE. Choose Rock, Paper or Scissors**] Toby interrupted.!\nToby: You can't be doing that during working hours.\nMichael: Why are you the way that you are?")
    return playerSelection()
  }
  else{
    return pSelection
  }
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

const resultDeclare = (pScore, cScore) => {

  if(pScore>cScore){
    console.log(`%cWIN!!! Your score: ${pScore} Goldenface: ${cScore} Michael Scarn once again saved the world!!\nMichael: My name is Scarn and I'm here to say, I'm about to do the Scarn in a major way...`,
    "color:#DAF7A6")
  }
  else if(pScore<cScore){
    console.log(`%cHa ha!! Your score: ${pScore} Goldenface: ${cScore} You LOST!!!\nMichael: It's Toby's fault!`, "color:hotpink")
  }
  else{
    console.log(`It's a tie!! Your score: ${pScore} Goldenface: ${cScore} No! Oh God No!!`)
  }
  return

}

const replay = () => {
  let replay = confirm("Mr Scarn, the President need you again, Goldenface is not truly defeated yet. Do you accept?")

  if(replay===true){
    location.reload()
  }
  else{
    return
  }
}

const game = () => {
  let count = 1;
  let pScore = 0;
  let cScore = 0;

  while(count <= 5){

    let pSelection = playerSelection()

    if(pSelection==="quit"){
      alert("Scarn: I'm getting too old for this")
      return
    }
 
    let computerSelection = computerPlay()
    let result = playRound(pSelection, computerSelection)
    let statementChocie = Math.floor(Math.random()*3)

    if(result==="win"){
      console.log(`Round ${count}/5 %c[**WIN**]%c ==> You chose: ${pSelection.trim().toLowerCase()}, Goldenface: ${computerSelection}.
      ${Object.keys(winStatements)[statementChocie]}
      ${winStatements[Object.keys(winStatements)[statementChocie]]}`, "color: gold")
      pScore++
      count++
    }
    else if(result==="tie"){
      console.log(`Round ${count}/5 %c[**TIE**]%c ==> You chose: ${pSelection.trim().toLowerCase()}, Goldenface: ${computerSelection}.
      Toby: Hey Michael
      Michael: Not Now TOBY!`, "color:#ADD8E6")
      count++
    }
    else{
      console.log(`Round ${count}/5 %c[**LOSE**]%c ==> You chose: ${pSelection.trim().toLowerCase()}, Goldenface: ${computerSelection}.
      ${Object.keys(loseStatements)[statementChocie]}
      ${loseStatements[Object.keys(loseStatements)[statementChocie]]}`, "color:hotpink")
      cScore++
      count++
    }

  }

  resultDeclare(pScore, cScore)

  replay()
  return
}

const winStatements = {
  "Goldenface: You win this time..": "Michael: I'm coming for you Goldenface!",
  "Goldenface: This is not over yet..": "Michael: Hey Goldenface, Go Puck yourself!",
  "Goldenface: This is getting hard!": "Michael: That's what she said!"
}

const loseStatements = {
  "Goldenface: Ha ha! You'll die here Scarn!": "Michael: It'll take a lot more than a bullet to kill Michael Scarn",
  "Michael: I'm getting too old for this": "Billy: I know how to cheer you up, you gotta teach us How To Scarn!",
  "Samuel: Oh my motherboard.!": "Michael: Damn it Dwight!"
}

console.log("%c" + "-".repeat(10) + "THREAT LEVEL MIDNIGHT" + "-".repeat(10), "color:red")
console.log("%cLast time Michael Scarn was able to stop Goldenface from blowing up the stadium and defeat him.\nBut now, he is back and this time with an upgrade, as an AI!!"
, "color:#ADD8E6")
console.log("%cOnce again, the world needs Scarn, Michael Scarn and his faithful robot butler Samuel!\nMichael: Looks like there's gonna be a cleanup on Aisle Five!", "color:#ADD8E6")

game()