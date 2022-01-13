// Define var to hold time value
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define var to hold display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define var to hold setInterval = function()
let interval = null;

// Define var to hold stopWatch status
let status = "stopped";

// StopWatch function logic to determine when to increment next value, etc.. function stopWatch()
function stopWatch() {
  seconds++;
  // Logic to determine when the inerment next value.
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  // if second/minutes/hours asre only one digit, add a 0 in front of the value.
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  // Logic to display update the user interface...
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

// window.setInterval(stopWatch, 1000);

function startStop() {
  // Logic to determine if the stopwatch is running or not
  if (status === "stopped") {
    // start the stopwatch by calling the setInterval function
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  } else {
    // stop the stopwatch by calling the clearInterval function
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

// Fucntion to reset the stopWatch
function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displaySeconds = 0;
  displayMinutes = 0;
  displayHours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}
