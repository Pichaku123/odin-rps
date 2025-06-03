let score_C=0, score_H=0, rounds=0;

function playRound(choice_hum){
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
        //implement this later for replayability
        // console.log("Would you like to play again?");    
        // rounds=0;
        // return;
    } 
    
}
function result(comp, hum){
    console.log(`You chose ${hum}`);

    let msg=document.createElement("p");
    msg.textContent=`You chose- ${hum}, computer chose- ${comp}`;
    progress.appendChild(msg);
    //progress is the div in which i'm adding these messages

    if(comp===hum){
        console.log("This round's a tie!");
        return "N";
    }
    if((hum==="rock" && comp==="paper") || (hum==="paper" && comp==="scissors") || (hum==="scissors") && (comp==="rock")){
        console.log("You lost this round :(");
        return "C";
    }
    else{
        console.log("You won this round!");
        return "H";
    }
}

function declare_winner(score_C, score_H){
    let res=document.createElement("p");
    
    if(score_C>score_H){
        console.log("You lost :(");
        res.textContent=`you lost`;
        result_dis.appendChild(res);
        return;
    }
    else if(score_C<score_H){
        console.log("You won!");
        res.textContent=`you won!`;
        result_dis.appendChild(res);
        return;
    }
    else{
        console.log("It's a tie!");
        res.textContent=`it's a tie`;
        result_dis.appendChild(res);
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

const progress=document.querySelector(".progress");
const result_dis=document.querySelector(".result_dis");
const human=document.querySelector(".human");
const computer=document.querySelector(".computer");
