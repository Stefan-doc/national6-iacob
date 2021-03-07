console.log("JavaScript - Digital Clock");
// Using the new knowledge leaned in index.js file we can implement a digital clock
// The digital clock will use existing html objects in index.html file
// Using "setInterval" we will calculate the value for seconds, minutes and hours an update the page every second to reflect the time spend on the page

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");


function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}

document.getElementById("start").addEventListener("click", buttonStartClick);

function buttonStartClick() {
  setInterval(function() {
    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours, hoursParagraphs);
  
    seconds++;
  
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  
    if (hours === 24) {
      hours = 0;
    }
  }, 100);
}
const time = setInterval(function() {

}, 1000);

document.getElementById("stop").addEventListener("click", buttonStopClick);
function buttonStopClick() {
  clearInterval(time);
}

// document.getElementById("reset").addEventListener("click", onClick);
// document.getElementById("save").addEventListener("click", onClick);