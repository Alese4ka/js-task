const timeToWork = document.querySelector('.pomodoro__clock__timer-minutes');
const timeToBreak = document.querySelector('.pomodoro__clock__break-minutes');
const startBtn = document.querySelector('.pomodoro__buttons-start');
const stopBtn = document.querySelector('.pomodoro__buttons-stop');
const deleteBtn = document.querySelector('.pomodoro__buttons-delete');
const timerClock = document.querySelector('.pomodoro__time-clock');
const sound = document.getElementById('sound');

let timeMinute;
let timer;

timeMinute = parseInt(timeToWork.value) * 60;

function startTimer(timeMinute){
  timer = setInterval(function( ){
    seconds = Math.floor(timeMinute%60);
    minutes = Math.floor(timeMinute/60%60);
    if (timeMinute <= 0) {
      clearInterval(timer);
      sound.play();
      timeMinute = parseInt(timeToBreak.value) * 60;
      startTimer(timeMinute);
    } else if (seconds < 10) {
      let strTimer = `${minutes}:0${seconds}`;
      timerClock.innerHTML = strTimer;
    }
    else {
      let strTimer = `${minutes}:${seconds}`;
      timerClock.innerHTML = strTimer;
    }
    --timeMinute; 
  }, 1000);
}

stopBtn.addEventListener('click', function() {
  clearInterval(timer);
})

startBtn.addEventListener('click', function() {
  startTimer(timeMinute);
})

deleteBtn.addEventListener('click', function() {
  clearInterval(timer);
  timerClock.innerHTML = `${timeToWork.value}:00`;
})
