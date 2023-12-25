let ctrlBtn = document.getElementById("ctrlBtn");
let music = document.getElementById("music");
let progress = document.getElementById("progress");

const body = document.querySelector('body');

music.onloadedmetadata = function () {
  progress.max = music.duration;
  progress.value = music.currentTime;
}

function playPause () {
  if (ctrlBtn.classList.contains("fa-pause")) {
    music.pause();
    ctrlBtn.classList.remove("fa-pause");
    ctrlBtn.classList.add("fa-play");
  }
  else if (ctrlBtn.classList.contains("fa-play")) {
    music.play();
    ctrlBtn.classList.add("fa-pause");
    ctrlBtn.classList.remove("fa-play");
    body.classList.add('play-music');
  }
}

if (music.play()) {
  setInterval(() => {
    progress.value = music.currentTime;
  },200);
}


progress.onchange = function () {
  music.play();
    music.currentTime = progress.value
    ctrlBtn.classList.add("fa-pause");
    ctrlBtn.classList.remove("play");
}