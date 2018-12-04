//Global variables
var number = 20;
var correctAnswer = 0;
var incorrectAnswer = 0;



//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#display").html(number);


    //  Once number hits zero...
    if (number <= 0) {
        //  Alert the user that time is up.
        $("#display").html("Game over!");
        $("#correct").css("visibility", "visible");
        $("#incorrect").css("visibility", "visible");
        $(".container").css("visibility", "hidden");

    }
}


$(":radio[value=correct]").on("click", function () {
    //write your code         
    correctAnswer++;
    $("#correct").html("Correct answers: " + correctAnswer);
});
$(":radio[value=wrong]").on("click", function () {
    incorrectAnswer++;
    $("#incorrect").html("Incorrect answers: " + incorrectAnswer);
});






// function when start is clicked
$("#start").on("click", function () {
    setInterval(decrement, 1000);
    // show form
    $(".container").css("display", "block");
    // hide start button
    $("#start").css("display", "none");


});

//  function when done is clicked
$(".done").on("click", function () {
    $("#correct").css("visibility", "visible");
    $("#incorrect").css("visibility", "visible");
    $("#unanswered").css("visibility", "visible");
    $(".container").css("display", "none");
    number = 0;
    



});