function game(){
    //whole game goes here
    let score_H=0, score_C=0;
    let rounds=0;
    while(rounds<5)
    {
        console.log(`Round No. ${rounds+1}`);
        let round_win=playRound(); //winner now has "C", "H" or "N"
        if(round_win=="H"){
            score_H++;
            console.log("You won this round!");
        }
        else if(round_win=="C"){
            score_C++;
            console.log("You lost this round :(");
        }
        else{
            console.log("This round's a tie!");
        } 
        rounds++;
    }
    declare_winner(score_C, score_H);
    return;
}
function playRound(){
    let choice_comp=()=>Math.floor(Math.random()*3);
    let choice_hum=()=>prompt("Enter your choice, rock, paper, scissors");
    let comp="", hum="";
    comp=set_choice(choice_comp());
    hum=choice_hum().toLowerCase();

    return result(comp, hum);
    
}
function result(comp, hum){
    //abhi ke liye lemme return "H" for human and "C" for computer and "N" for none, badme change kar sakte ig
    console.log(`You chose ${hum}`);
    if(comp===hum){
        return "N";
    }
    if((hum==="rock" && comp==="paper") || (hum==="paper" && comp==="scissors") || (hum==="scissors") && (comp==="paper")){
        return "C";
    }
    else{
        return "H";
    }
}
function declare_winner(score_C, score_H){
    if(score_C>score_H){
        console.log("You lost :(");
        return;
    }
    else if(score_C<score_H){
        console.log("You won!");
        return;
    }
    else{
        console.log("It's a tie!");
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

game();