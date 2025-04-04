function getComputerChoice() {
    const computerChoice = Math.random()
    // console.log(computerChoice)
    if (computerChoice < 0.33) {
        //console.log("rock")
        return("rock")
    }
    else if (computerChoice < 0.66) {
        //console.log("paper")
        return("paper")
    }
    else {
        //console.log("sissors")
        return("sissors")
    }
}   


function playGame (){
    var humanScore =0;
    var computerScore =0;

    function checkWinner() {
        if (humanScore > 4) {
            printResult("HUMAN WINS 5 GAMES!");
            resetGame();
        }
        else if (computerScore > 4) {
            printResult("COMPUTER WINS 5 GAMES!");
            resetGame();
        }
    }
    
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        updateScore(humanScore, computerScore);
    }

    function updateScore(humanScore, computerScore) {
        scoreDiv.textContent ="Your score:" + humanScore + " Computer score:" + computerScore;
    } 

    function printResult(string){
        resultDiv.textContent = string;
    }

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        if (humanChoice === computerChoice) {
            //console.log("It's a tie!");
            printResult("It's a tie!")
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            //console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            printResult(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            //console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            printResult(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        updateScore(humanScore, computerScore);
        checkWinner();
    }

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", (event) => {
            let humanChoice = event.target.textContent.toLowerCase();
            console.log(humanChoice);
            let computerChoice = getComputerChoice();
            playRound(humanChoice,computerChoice);
        });
    });


}

//Create DOM elements 
const resultsDiv = document.createElement('div');
resultsDiv.id = 'results';
document.body.appendChild(resultsDiv);

const resultDiv = document.createElement('div');
resultDiv.id = 'result';
const currentResult = document.createTextNode("Click button to play!");
resultDiv.appendChild(currentResult);
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
scoreDiv.id = 'score';
const currentScore = document.createTextNode("Your score: 0" + " Computer score:0");
scoreDiv.appendChild(currentScore);
document.body.appendChild(scoreDiv);




playGame();



