let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
}

const drawgame= () => {
    msg.innerText="Draw hua bro try again.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin,userChoice,Compchoice)=>{
    if (userwin) {
        userScore ++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${Compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore ++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose! Your ${userChoice} beatenby ${Compchoice}!`;
        msg.style.backgroundColor="red";

    }
}
const playgame=(userChoice)=>{
    const Compchoice=genCompChoice();
    if (Compchoice===userChoice) {
        drawgame();
    } else {
        let userwin=true;
        if (userChoice==="rock") {
            userwin=Compchoice==="paper"?false:true;
        } else if (userChoice==="paper") {
            userwin=Compchoice==="scissors"?false:true;
        } else if (userChoice==="scissors") {
            userwin=Compchoice==="rock"?false:true;
        }
    showWinner(userwin,userChoice,Compchoice);
    }
}

choices.forEach((choice)=>
    {choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});