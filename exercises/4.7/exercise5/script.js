let personName = "";
let inputText = document.querySelector('#name');
let buttonMood = document.querySelector('.mood');
let buttonDontClick = document.querySelector('.dontClick');
let bunttonWhatHappened = document.querySelector('.whatHappened');

function complainMessage() {
  alert("I told you not to do that " + personName);
}
buttonDontClick.addEventListener('click', complainMessage)

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}
inputText.addEventListener('keyup', typeAndScream);

function goDark() {
  let body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
}
buttonMood.addEventListener('click', goDark);

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}
bunttonWhatHappened.addEventListener('click', finishTheStory);
