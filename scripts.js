
console.log(document.querySelector('.game-result').innerHTML);

function results(userInput){
    let score= JSON.parse(localStorage.getItem('score'));
    if(!score){
        score={
            wins:0,
            loss:0,
            ties:0
        };
    }
    var result;      
    const randomNumber=Math.random(); 
    if (randomNumber <= 0.33)
        var compChoice = 'rock';
    else if (randomNumber <= 0.66)
        var compChoice = 'paper';
    else
        var compChoice = 'scissors';


    if(userInput===compChoice){
        result='tie';
        score.ties++;
    }else if(userInput=='rock' && compChoice=='scissors'||
        userInput=='paper' && compChoice=='rock'||
        userInput=='scissors' && compChoice=='paper'){
            result='win';
            score.wins++;
    }else if(userInput=='rock' && compChoice=='paper'||
        userInput=='paper' && compChoice=='scissors'||
        userInput=='scissors' && compChoice=='rock'){
            result='loss';
            score.loss++;
        }
    if(result=='tie'){
        let message = "Your choice: " + userInput +
        " and computer choice: " + compChoice + 
        "<br>ITS A TIE ;_; <br>" +
        "Stats:: Wins = " + score.wins + 
        ", Loss = " + score.loss + 
        ", Ties = " + score.ties;
        document.querySelector('.game-result').innerHTML=message;
        /* alert(`Your choice: ${userInput} and computer choice: ${compChoice} \n 
                ITS A TIE ;_; \n 
                Stats:: Wins= ${score.wins}, Loss= ${score.loss}, Ties= ${score.ties} `); */
    }else if(result=='win'){
        let message = "Your choice: " + userInput +
        " and computer choice: " + compChoice + 
        "<br>You Win :) <br>" +
        "Stats:: Wins = " + score.wins + 
        ", Loss = " + score.loss + 
        ", Ties = " + score.ties;
        document.querySelector('.game-result').innerHTML=message;
        /*alert(`Your choice: ${userInput} and computer choice: ${compChoice} \n 
                You Win :) \n 
                Stats:: Wins= ${score.wins}, Loss= ${score.loss}, Ties= ${score.ties}`);*/
    }else if(result=='loss'){
        let message = "Your choice: " + userInput +
        " and computer choice: " + compChoice + 
        "<br>You Lost the game :( <br>" +
        "Stats:: Wins = " + score.wins + 
        ", Loss = " + score.loss + 
        ", Ties = " + score.ties;
        document.querySelector('.game-result').innerHTML=message;
    }
        /*alert(`Your choice: ${userInput} and computer choice: ${compChoice} \n 
                You lost :( \n 
                Stats:: Wins= ${score.wins}, Loss= ${score.loss}, Ties= ${score.ties}\n`);*/
    localStorage.setItem('score',JSON.stringify(score));
}
function reset(){
    localStorage.removeItem('score');
    alert(`Stats have been reset`);
    document.querySelector('.game-result').innerHTML="Your Results Here!!!";
}