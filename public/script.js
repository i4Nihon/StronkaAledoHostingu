const timer = document.getElementById('stopWatch');

var msec = 0;
var sec = 0;
var min = 0;
var stoptime = true;




function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    

    msec = msec + 1;

    if (msec == 10) {
      sec = sec + 1;
      msec = 0;
    }
    if (sec == 60) {
      min = min + 1
      sec = 0;
      msec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ":" + msec;

    setTimeout("timerCycle()", 100);
  }
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    
    hr=0
    min=0
    sec=00
}