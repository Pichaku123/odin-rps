let score_C=0, score_H=0, rounds=0;
let gameOver=false;

function playRound(choice_hum){
    if(gameOver) return;
    
    const choice_comp=()=>Math.floor(Math.random()*3);
    comp=set_choice(choice_comp()); //rock, paper, scissors
    switch(result(comp, choice_hum))
    {
        case "C": {
            score_C++; 
            computer.textContent=`Computer- ${score_C}`;
            break;
        }
        case "H": {
            score_H++; 
            human.textContent=`Human- ${score_H}`;
            break;
        }
        case "N": {
            
            break;
        }
    }    
    rounds++;  
    if(rounds==5){
        declare_winner(score_C, score_H);
        gameOver=true;
    } 
        
}
function result(comp, hum){
    console.log(`You chose ${hum}`);

    
    //progress is the div in which i'm adding these messages
    choice.textContent=`You chose ${hum}, Computer chose ${comp}`;
    if(comp===hum){
        console.log("This round's a tie!");
        progress.textContent=`Round Tied.`;
        return "N";
    }
    if((hum==="rock" && comp==="paper") || (hum==="paper" && comp==="scissors") || (hum==="scissors") && (comp==="rock")){
        console.log("You lost this round :(");
        progress.textContent=`Round Lost :(`;
        return "C";
    }
    else{
        console.log("You won this round!");
        progress.textContent=`Round won!`;
        return "H";
    }
}

function declare_winner(score_C, score_H){
    if(score_C>score_H){
        console.log("You lost :( ");
        result_dis.textContent=`You Lost the Game :( Reload the page to play again.`;
        return;
    }
    else if(score_C<score_H){
        console.log("You won!");
        result_dis.textContent=`Congrats, you won! Reload the page to play again.`;
        return;
    }
    else{
        console.log("It's a tie!");
        result_dis.textContent=`The game's a tie... Reload the page to play again.`;
        return;
    }
}
function set_choice(num){

    switch(num)
    {
        case 0:{
            return "rock";
        }
        case 1:{
            return "paper";
        }
        case 2:{
            return "scissors";
        }
    }
}

//uses the click events to play the rounds, while using global variables to keep track of progress of comp, human and rounds played.
document.querySelector("#rock").addEventListener("click", () => {
    winner=(playRound("rock"));
    
});
document.querySelector("#paper").addEventListener("click", () => {
    winner=(playRound("paper"));
    
});
document.querySelector("#scissors").addEventListener("click", () => {
    winner=(playRound("scissors"));
    
});

const choice=document.querySelector(".choice");
const progress=document.querySelector(".progress");
const result_dis=document.querySelector(".result_dis");
const human=document.querySelector(".human");
const computer=document.querySelector(".computer");
