function getComputerChoice() {
    const computerChoice = Math.random()
    // console.log(computerChoice)
    if (computerChoice < 0.33) {
        //console.log("rock")
        return("rock")
    }
    else if (0.33 <computerChoice && computerChoice < 0.66) {
        //console.log("paper")
        return("paper")
    }
    else {
        //console.log("sissors")
        return("sissors")
    }
}   

function getHumanChoice(){
    let humanChoice = prompt("rock, paper or sissors").toLowerCase().trim();
    return humanChoice;
    // console.log(humanChoice);
}


  

function playGame (){
    var humanScore =0;
    var computerScore =0;

    function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

    for (let i = 0; i < 5; i++) {
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

}



playGame()

