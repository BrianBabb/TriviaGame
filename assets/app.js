// javascript for trivia 
$(document).ready(function () {


    // hide details until start is pressed. 
    $(".gameQuestion").hide();
    $(".question").hide();
    $("gameTimer").hide();
    $("#countdown").hide();
    $("finished").hide();


    // score board variables 
    var correct = 0;
    var wrong = 0;
    var skipped = 0;
    var gameTimer = 0;
    var number = 45;
    var wins = [];
    var loses = [];

    // start game / unhide questions / start timer 

    //function  gameTimer(){
    //  finalCountdown = setInterval(decrement, 1000);
    //$("#timer").append()
    //}
    // gameTimer = setInterval(function(){ alert("Time up"); }, 60000); 

    // count down timer 
    number--;
    $("#timer").html(" " + number + "  " + "seconds")
    console.log(timer);
    console.log(number + "test time");


    // // timer test/countdown - stackOV
    //$("#startClock").click( function(){
    var gameTimer = 45;
    setInterval(function () {
        gameTimer--;
        if (gameTimer >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = gameTimer;
        }
        if (gameTimer === 0) {
            alert('sorry, out of time');
            // clearInterval(counter);
        }
    }, 3000);
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

});

// function to start on start click. 
function startGame() {
    $(".gameQuestion").show();
    $("#countdown").show();
    $(".question").show();
    //   gameTimer();
};



function done() {
    $("finshed").show();
    $("#wins").text("Correct Answers:" + " " + correct);
    $("#loses").text("Wrong Answers:" + " " + wrong);
    console.log(wins + "w");
    console.log(loses + "L");
};


$("#countdown").on(function () {
    gameTimer();
    gameQuestion();
});

// clear timer. 
function stop() {
    clearInterval(finalCountdown);
}
// radio button functions & score attempt - 
// $(".answer").change(function(){
  // selected_value = $("input[name="question1"]:checked").val();
   // console.log(question1);

//    });


// closer bracket 
// }
// )
;
