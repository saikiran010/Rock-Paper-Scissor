let userScore=0;
let compScore=0;

const options=document.querySelectorAll(".option");

const msg= document.querySelector("#message");

const userScorePara=document.querySelector("#user-score");

const compScorePara=document.querySelector("#comp-score");


const genComputerChoice=()=>{
    const choices=["rock","paper","scissor"];
    const randInd=Math.floor(Math.random()*3);
    return choices[randInd];
}

const drawGame=()=>{
    msg.innerText="Game was draw...play again...";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
      userScore++;
      userScorePara.innerText=userScore;
      msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
    }
    else{
      compScore++;
      compScorePara.innerText=compScore;
      msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice) =>{
 console.log("user choice = ",userChoice);
 //Generate Computer Choice
 const compChoice=genComputerChoice();
 console.log("computer choice = ",compChoice);

 if(userChoice === compChoice){
    //Drew game
    drawGame();
 }
 else{
    let userWin=true;
    if(userChoice==="rock")
        //scissor,paper
        userWin = compChoice==="paper"?false:true;
    else if(userChoice === "paper")
        //rock,scissor
       userWin = compChoice === "scissor"?false:true;
    else
       //rock,paper
       userWin = compChoice === "rock"?false:true;

    showWinner(userWin,userChoice,compChoice);

 } 
};



options.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
