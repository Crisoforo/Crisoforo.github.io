// Global variables
let sum = 0;
let randyNumber = 0;
let gem1 = 0;
let gem2 = 0;
let gem3 = 0;
let gem4 = 0;


// start the game

function gameStart() {
    
  randyNumber = Math.floor(Math.random() * 120) + 19;
  $('#randyNum').append(randyNumber);
  // console.log(randyNumber);

  gem1 = Math.floor(Math.random() * 9) + 1;
  gem2 = Math.floor(Math.random() * 9) + 1;
  gem3 = Math.floor(Math.random() * 9) + 1;
  gem4 = Math.floor(Math.random() * 9) + 1;

  $('#quartz').click(function() {
    sum += gem1;
    $('#score').html(sum);
  });
  $('#crystal').click(function() {
    sum += gem2;
    $('#score').html(sum);
  });
  $('#pyrite').click(function() {
    sum += gem3;
    $('#score').html(sum);
  });
  $('#glass').click(function() {
    sum += gem4;
    $('#score').html(sum);
  });

  //win-lose not working
  if (sum === randyNumber) {
   wins++;
    $('#wins').append(wins);
  } else if (sum > randyNumber) {
   losses++;
    $('#losses').append(losses);
  }
};



gameStart();
