var wins = 0;
var losses = 0;
var guesses = 9;
var urGuesses = 0;


document.onkeydown = function(event) {

    var rdmGuess = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1); 
    var usrGuess = event.key;



    if (rdmGuess === usrGuess) {
        wins++;
    } else  {
        guesses--;
    }
    if(guesses === 0){
      losses++;
      guesses=9;
    } 
    
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
};

  

