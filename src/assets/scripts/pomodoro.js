const timeToWork = document.querySelector('.pomodoro__clock__timer-minutes');
const timeToBreak = document.querySelector('.pomodoro__clock__break-minutes');
const startBtn = document.querySelector('.pomodoro__buttons-start');
const stopBtn = document.querySelector('.pomodoro__buttons-stop');
const deleteBtn = document.querySelector('.pomodoro__buttons-delete');
const timerClock = document.querySelector('.pomodoro__time-clock');
const sound = document.getElementById('sound');

let timeMinute;
let timer;
let workStatus = true;

startBtn.addEventListener('click', function() {
  sound.load(); 
  sound.play();
  if (workStatus == true) {
    timeMinute = parseInt(timeToWork.value) * 60;
    timer = setInterval(startTimerWork, 1000);
  } else {
    timer = setInterval(startTimerWork, 1000);
  }
})

stopBtn.addEventListener('click', function() {
  clearInterval(timer);
  startBtn.disabled = false;
  workStatus = false;
})

deleteBtn.addEventListener('click', function() {
  clearInterval(timer);
  timeMinute = parseInt(timeToWork.value) * 60;
  timerClock.innerHTML = `${timeToWork.value}:00`;
  startBtn.disabled = false;
})

function startTimerWork(){
  startBtn.disabled = true;
  seconds = Math.floor(timeMinute%60);
  minutes = Math.floor(timeMinute/60%60);
  if (timeMinute <= 0) {
    clearInterval(timer);
    sound.play();
    timeMinuteBreak = parseInt(timeToBreak.value) * 60;
    timer = setInterval(startTimerBreak, 1000);
  } else if (seconds < 10) {
    let strTimer = `${minutes}:0${seconds}`;
    timerClock.innerHTML = strTimer;
  }
  else {
    let strTimer = `${minutes}:${seconds}`;
    timerClock.innerHTML = strTimer;
  }
  --timeMinute;
}

function startTimerBreak() {
  seconds = Math.floor(timeMinuteBreak%60);
  minutes = Math.floor(timeMinuteBreak/60%60);
  if (timeMinuteBreak <= 0) {
    clearInterval(timer);
    sound.play();
    timeMinute = parseInt(timeToWork.value) * 60;
    timer = setInterval(startTimerWork, 1000);
  } else if (seconds < 10) {
    let strTimer = `${minutes}:0${seconds}`;
    timerClock.innerHTML = strTimer;
  }
  else {
    let strTimer = `${minutes}:${seconds}`;
    timerClock.innerHTML = strTimer;
  }
  --timeMinuteBreak;
}


