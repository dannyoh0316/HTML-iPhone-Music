// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var volLevel = 3;
var play = false;
var playerBar = document.getElementById("player-bar");
var elapsedTime = document.getElementById("time-elapsed");
var currentSongIndex = 6;
var currentSongName = document.getElementById("player-song");

function init() {
  for (var i = 0; i < 6; i++) {
    volLevels[i] = document.getElementById("vl" + i);
  }

  for(var i = 0; i < 3; i++) {
    volLevels[i].style.backgroundColor = "#9f5cc4";
  }
};

function volUp() {
  if (volLevel < 6) {
    volLevels[volLevel].style.backgroundColor = "#9f5cc4";
    volLevel++;
  }
}

function volDown() {
  if (volLevel > 0) {
    volLevel--;
    volLevels[volLevel].style.backgroundColor = "white";
  }
}

function switchPlay() {
  var playIcon = document.getElementById("playIcon");
  if (play == false) {
    playIcon.innerHTML = "<i class='material-icons'>pause</i>";
    play = true;
    time_int = setInterval(playTime, 1000);
  }
  else {
    playIcon.innerHTML = "<i class='material-icons'>play_arrow</i>";
    play = false;
    clearInterval(time_int);
  }
}

function playTime() {
  playerBar.value++;
  elapsedTime.innerHTML = secondsToMs(playerBar.value);
  if (playerBar.value == 180) {
    nextSong();
  }
}

function nextSong() {
  playerBar.value = 0;
  elapsedTime.innerHTML = secondsToMs(playerBar.value);
  if (currentSongIndex == tracklist.length - 1) {
    currentSongIndex = 0;
  }
  else {
    currentSongIndex++;
  }
  currentSongName.innerHTML = tracklist[currentSongIndex];
}

function prevSong() {
  playerBar.value = 0;
  elapsedTime.innerHTML = secondsToMs(playerBar.value);
  if (currentSongIndex == 0) {
    currentSongIndex = tracklist.length - 1;
  }
  else {
    currentSongIndex--;
  }
  currentSongName.innerHTML = tracklist[currentSongIndex];
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
