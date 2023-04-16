let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
function nextSequence() {
  level++;
  $('#level-title').text('level ' + level);
  let num = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[num];
  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}

$('.btn').on('click', function () {
  let userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});
function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

$(document).keydown(function () {
  if (!started) {
    $('#level-title').text('level ' + level);
    nextSequence();
    started = true;
  }
});
