var correct = 0;
var wrong = 0;
var skipped = 0;
var gameTimer = 60;
var number = 60;
var wins = [];
var loses = [];
var clock;

// javascript for trivia 
$(document).ready(function () {


    // hide details until start is pressed. 
    $(".gameQuestion").hide();
    $(".question").hide();
    $("gameTimer").hide();
    $("#countdown").hide();
    $("finished").hide();


    // score board variables 


    // start game / unhide questions / start timer 

    //function  gameTimer(){
    //  finalCountdown = setInterval(decrement, 1000);
    //$("#timer").append()
    //}
    // gameTimer = setInterval(function(){ alert("Time up"); }, 60000); 

  



    // // timer test/countdown - stackOV
    //$("#startClock").click( function(){
    clock = setInterval(finalCountdown, 1000);
});

//clicking start 
$(".start").on("click", function () {
    //   $("startgame".hide());
    startGame();
    // $("startGame");
    // $("gameQuestoin");
    // $("question");
    // $("countdown");
    // gameQuestion();
    //  question();
    console.log("startbutton");
    //   gameQuestion.show;
      // count down timer 
      number--;
      $("#timer").html(" " + number + "  " + "seconds")
      console.log(timer);
      console.log(number + "test time");

});



// function to start on start click. 
function startGame() {
    $(".gameQuestion").show();
    $("#countdown").show();
    $(".question").show();
    $("finalCountDown").show();
    $("number");
    //   gameTimer();
};


// when game is completed - show score 
function done() {
    $("finshed").show();
    $("#wins").text("Correct Answers:" + " " + correct);
    $("#losses").text("Wrong Answers:" + " " + wrong);
   // console.log(wins + "w");
    // console.log(loses + "L");
};


$("#countdown").on(function () {
    gameTimer();
    gameQuestion();
});

// clear timer. 
function stop() {
    clearInterval(clock);
}
// radio button functions & score attempt - 
$(".option").change(function () {
    var selected_value = $(this).attr("value");
    console.log(selected_value);
    correct = $('input[value=correct]:checked').length;
    wrong = $('input[value=wrong]:checked').length;

    console.log(correct + "w")
    console.log(wrong + "L's");

    if (correct === 10) {
        console.log("Winner Winner");
        alert("winner winner chicken dinner");
        done();
        stop();
    } else if
        (wrong === 10) {
        console.log("did you even try");
        alert(" did you even try");
        done();
        stop();
    } else if
        (correct + wrong === 10) {
        console.log("gg");
        alert(" game over");
        done();
        stop();
    }
}
  

);


//   $("input[type=radio]").on("change", function () {
//    correct = $("input[value=correct]:checked").length;
//    wrong = $("input[value=wrong]:checked").length;
//    skipped = (10 - (correct + wrong));
//    $("done");
//    });

// game count down 
function finalCountdown() {

    gameTimer -- ;
    if (gameTimer >= 0) {
        span = document.getElementById("timer");
        span.innerHTML = gameTimer;

        if (gameTimer === 0) {
            alert('sorry, you lose');
            // clearInterval(counter);
        }
    }
}

// closer bracket 
// }
// )
;
