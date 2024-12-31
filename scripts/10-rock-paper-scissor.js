 // set default score if the item is empty
 let score = JSON.parse(localStorage.getItem('score')) ||
 {
   wins: 0,
   lose: 0,
   Tie: 0
 };

 updateScore();


 /*
 if (score=== null){
    score={
    wins: 0,
    lose: 0,
    Tie: 0  
   };
  }
   */
let isAutoplaying = false ;
  let intervalId;
  function autoPlay(){
        if(!isAutoplaying){
        intervalId=setInterval(function(){
          const playerMove= pickComputerMove();
        playGame(playerMove);
    
        },1000);
        isAutoplaying=true;
      }
    else{

      clearInterval(intervalId);
      isAutoplaying=false;
    }
  }



 function playGame(playerMove) {
   const computerMove = pickComputerMove();

   let result = '';

   if (playerMove === 'Scissor') {

     if (computerMove === 'Rock') {
       result = 'You Lose';
     } else if (computerMove === 'Paper') {
       result = 'You Win';
     } else if (computerMove === 'Scissor') {
       result = 'Tie';
     }


   } else if (playerMove === 'Paper') {

     if (computerMove === 'Rock') {
       result = 'You Win';
     } else if (computerMove === 'Paper') {
       result = 'Tie';
     } else if (computerMove === 'Scissor') {
       result = 'You Lose';
     }


   } else if (playerMove === 'Rock') {


     if (computerMove === 'Rock') {
       result = 'Tie';
     } else if (computerMove === 'Paper') {
       result = 'You Lose';
     } else if (computerMove === 'Scissor') {
       result = 'You Win';
     }
   }

   if (result === 'You Win') {
     score.wins = score.wins + 1;
   }
   else if (result === 'You Lose') {
     score.lose = score.lose + 1;
   }
   else if (result === 'Tie') {
     score.Tie = score.Tie + 1;
   }
   // save the value in local storage so it does not reset while refreshig
   localStorage.setItem('score', JSON.stringify(score));

   updateScore();

   document.querySelector('.js-result').innerHTML = result;
   document.querySelector('.js-move').innerHTML = `You
     <img src="images/${playerMove}-emoji.png" class="move-icon">
     <img src="images/${computerMove}-emoji.png" class="move-icon">
     Computer`;
 }
 // Function to upate score element on screen

 function updateScore() {
   document.querySelector('.js-score')
     .innerHTML = `Wins : ${score.wins}, Loses : ${score.lose}, Tie : ${score.Tie}`;

 }


 function pickComputerMove() {
   const randomNumber = Math.random();

   let computerMove = '';

   if (randomNumber >= 0 && randomNumber < 1 / 3) {
     computerMove = 'Rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
     computerMove = 'Paper';
   }
   else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerMove = 'Scissor';
   }

   return computerMove;
 }


