var buttonColours = ["red", "blue", "green", "yellow"];
var inputArray = []
var flashArray = []
var started = false;
var level = 0; 

$(".image").on("click",function(){
    $(this).animate({opacity:0.5}, 50, function() {
    $(this).animate({opacity:1})
  });
});
$(".image").on("click",function(){
    var inner = $(this).attr("id");
    var file = './' + inner + '.mp3';
    var audio = new Audio(file)
    audio.play();
})

$(document).keypress(function() {
  if (!started) {
    $(".header").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".image").on("click",function(){
  var inputColor = $(this).attr("id")
  inputArray.push(inputColor)
 
  checkAnswer(inputArray.length-1)
})

function checkAnswer(currentLevel) {

  if (flashArray[currentLevel] === inputArray[currentLevel]) {
    if (inputArray.length === flashArray.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var aud = new Audio("wrong.mp3")
    aud.play();
    $("body").addClass("game-over");
    $(".header").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}


function nextSequence() {
  inputArray = [];
  level++;
  $(".header").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  flashArray.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}


function startOver() {
  level = 0;
  flashArray = [];
  started = false;
}








