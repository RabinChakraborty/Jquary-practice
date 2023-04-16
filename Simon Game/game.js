let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
function nextSequence() {
  return Math.floor(Math.random() * 4);
}
let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
