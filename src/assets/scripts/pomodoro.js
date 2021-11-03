const timeToWork = document.querySelector('.pomodoro__clock__timer-minutes');
const timeToBreak = document.querySelector('.pomodoro__clock__break-minutes');
const startBtn = document.querySelector('.pomodoro__buttons-start');
const stopBtn = document.querySelector('.pomodoro__buttons-stop');
const timerClock = document.querySelector('.pomodoro__time-clock');

//Добавить паузу -
//Добавить стоп +-

startBtn.addEventListener('click', function() {
  timeMinute = parseInt(timeToWork.value) * 60;
})

const sound = document.getElementById("ado");

timer = setInterval(function () {
  seconds = Math.floor(timeMinute%60);
  minutes = Math.floor(timeMinute/60%60);
  if (timeMinute <= 0) {
    clearInterval(timer);
    sound.play();
    timeMinuteBreak = parseInt(timeToBreak.value) * 60;
    timer = setInterval(function () {
      seconds = Math.floor(timeMinuteBreak%60);
      minutes = Math.floor(timeMinuteBreak/60%60);
      if (timeMinuteBreak <= 0) {
        clearInterval(timer);
        sound.play();
        timer = setInterval(function () {
          seconds = Math.floor(timeMinute%60);
          minutes = Math.floor(timeMinute/60%60);
          if (timeMinute <= 0) {
            clearInterval(timer);
            sound.play();
            timeMinuteBreak = parseInt(timeToBreak.value) * 60;
            setInterval(function () {
              seconds = Math.floor(timeMinuteBreak%60);
              minutes = Math.floor(timeMinuteBreak/60%60);
              if (timeMinuteBreak <= 0) {
                timer;
              } else if (seconds < 10) {
                let strTimer = `${minutes}:0${seconds}`;
                timerClock.innerHTML = strTimer;
              }
              else {
                  let strTimer = `${minutes}:${seconds}`;
                  timerClock.innerHTML = strTimer;
              }
              --timeMinuteBreak;
            }, 1000);
          } else if (seconds < 10) {
            let strTimer = `${minutes}:0${seconds}`;
            timerClock.innerHTML = strTimer;
          }
          else {
            let strTimer = `${minutes}:${seconds}`;
            timerClock.innerHTML = strTimer;
          }
          --timeMinute; 
        }, 1000)
      } else if (seconds < 10) {
        let strTimer = `${minutes}:0${seconds}`;
        timerClock.innerHTML = strTimer;
      }
      else {
          let strTimer = `${minutes}:${seconds}`;
          timerClock.innerHTML = strTimer;
      }
      --timeMinuteBreak;
    }, 1000);
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

stopBtn.addEventListener('click', function() {
  clearInterval(timer);
  timerClock.innerHTML = `${timeToWork.value}:00`;
})