function getComputerChoice(){
    let a=Math.floor(Math.random()*3);
    if(a==0) return "rock";
    else if(a==1) return "paper";
    else return "scissors";
}
function getHumanChoice(){
    let a=prompt("Please enter your choice (rock/paper/scissors): ").toLowerCase();
    if(a=="rock" || a=="paper" || a=="scissors") return a;
    else {console.log("Invalid choice");return getHumanChoice();}
}
function playRound(h,c){
    if(h=="rock"){
        if(c=="rock"){
            console.log("It's a tie!");
        }
        else if(c=="paper"){
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
        else{
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    }
    else if(h=="paper"){
        if(c=="rock"){
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else if(c=="paper"){
            console.log("It's a tie!");
        }
        else{
            console.log("You lose! Scissors beat paper.");
            computerScore++;
        }
    }
    else{
        if(c=="rock"){
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else if(c=="paper"){
            console.log("You win! Scissors beat paper.");
            humanScore++;
        }
        else{
            console.log("It's a tie!");
        }
    }

}
function playGame(){
    humanScore=0;
    computerScore=0;
    for(let i=0;i<5;i++){
        console.log("Round %d",i+1);
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore>computerScore) console.log("You won the game by %d point(s)!\nCongratulations!!!",humanScore-computerScore);
    else if(humanScore<computerScore) console.log("You lost by %d point(s).\nBetter luck next time!!!",computerScore-humanScore);
    else console.log("The game ended in a tie!\nWell played!!!");

}

let humanScore,computerScore;
playGame();