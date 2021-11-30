const timer = document.getElementById('timer');

var hour = document.getElementById("hr");
var min = document.getElementById("min");
var sec =  document.getElementById("sec");
var stoptime = true;




function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hour = parseInt(hour);
    
    if (hour == null) hour = 0
    if (min == null) min = 0
    if (sec == null) sec = 0

    sec = sec -1

    if (sec == 00) {
      sec = sec + 1;
      msec = 59;
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
    timer.innerHTML = '00:00:0';
    if (stoptime == false) {
      stoptime = true;
    }
    msec=0
    min=0
    sec=0
}