let chance = 1;
let UserScore = 0;
let ComputerScore = 0;

function play(UserChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const ComputerChoice = choices[Math.floor(Math.random() * 3)];
    
    
    let result = "";
    let finalResult="";

    if (chance >3) {
        document.getElementById("result").innerHTML = "<strong> Game Over! Refresh the page again.</strong>";
        return;
    }
    
    document.getElementById("Round").innerHTML = `***Round ${chance}/3***`;

    if (UserChoice === ComputerChoice) {
        result = "Round Result: <strong>***** Draw *****</strong>"
    }
    else if ((UserChoice === 'rock' && ComputerChoice === 'scissor') ||
        (UserChoice === 'paper' && ComputerChoice === 'rock') ||
        (UserChoice === 'scissor' && ComputerChoice === 'paper')) {
            UserScore++;
        result = "Round Result: <strong>***** User Win *****</strong>"
    }
    else {
        ComputerScore++;
        result = "Round Result: <strong>***** Computer Win ***** </strong>"
    }
    chance++;
    let Scores=0;
    if(chance==4){
        if(UserScore>ComputerScore){
            finalResult= "<br><strong>Final Result: ***You win***</strong>"
            Scores=UserScore;
        }
        else if(UserScore<ComputerScore){
            finalResult= "<br><strong>Final Result: ***Computer win***</strong>"
            Scores=ComputerScore;
        }
        else{
            finalResult= "<br><strong>Final Result: ***Draw***</strong>"
        }
    document.getElementById("finalResult").innerHTML = `${finalResult}<strong> by Score:${Scores}`;
    }
    document.getElementById("result").innerHTML = `You Choose: <b>${UserChoice}</b><br>
    Computer Choose: <b>${ComputerChoice}</b><br>
    <strong>${result}</strong>
    <br>Score: <strong> User${UserScore} - Computer${ComputerScore}</strong>`;

    
}
