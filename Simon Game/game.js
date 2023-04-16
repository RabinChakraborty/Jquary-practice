let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let num = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[num];
  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  audio.play();
}

$('.btn').on('click', function () {
  let userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
