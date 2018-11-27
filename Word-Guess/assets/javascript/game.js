
var wordToGuess = ["the beatles","strawberry fields","hey jude","helter skelter","come together","yellow submarine","help"];
var word;
var underScore = [];
var win=0;
var guesses = 9;






function startGame(){
   
   word = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];

   for ( i = 0; i < word.length; i++) {
      underScore.push("_");
   }

   document.getElementById("word").innerHTML = underScore.join(" ");

   wrongLetter = [];
 

   

};



document.onkeydown = function(event) {
    var usrGuess = event.key;

    if (word.indexOf(usrGuess > -1)) { 

      for (var i = 0; i < word.length; i++) {
         if (word[i]===usrGuess) {
            underScore[i] = usrGuess;
            document.getElementById("word").innerHTML=underScore.join(" ");
            win++;
            console.log("win: "+win)
            
            
           

         }
      }
   }
   else
   {
      wrongLetter.push(usrGuess);
      guesses--;
      console.log("Guesses: "+guesses)

     
      
   }
 
   
};


startGame();
