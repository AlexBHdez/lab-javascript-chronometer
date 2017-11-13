var buttonLeft = document.getElementById("btnLeft");
var buttonRight = document.getElementById("btnRight");
var secCenDigit = document.getElementById("secCen");
var secDecDigit = document.getElementById("secDec");
var minCenDigit = document.getElementById("minCen");
var minDecDigit = document.getElementById("minDec");
var milSecDigit = document.getElementById("milSec");
var splitsList = document.getElementById('splits');

function Chronometer () {}

Chronometer.prototype.constructor = Chronometer;

Chronometer.prototype.startClick = function() {
  buttonLeft.className = "btn stop";
  buttonLeft.innerHTML = "STOP";
  buttonRight.className = "btn split";
  buttonRight.innerHTML = "SPLIT";
  this.counter();
};

Chronometer.prototype.stopClick = function() {
  buttonLeft.className = "btn start";
  buttonLeft.innerHTML = "START";
  buttonRight.className = "btn reset";
  buttonRight.innerHTML = "RESET";
  clearInterval(this.intervalID);
  clearInterval(this.intervalMil);
};

Chronometer.prototype.resetClock = function() {
  //cambiará el botón de reset a split
  buttonRight.className = "btn split";
  buttonRight.innerHTML = "SPLIT";
  //pondrá todas las cifras a 0
  secCenDigit.innerHTML = 0;
  secDecDigit.innerHTML = 0;
  minCenDigit.innerHTML = 0;
  minDecDigit.innerHTML = 0;
  milSecDigit.innerHTML = 00;
  while (splitsList.hasChildNodes()) {
    splitsList.removeChild(splitsList.firstChild);
  }
};

Chronometer.prototype.split = function(){
  var newLi = document.createElement('li');
  newLi.innerHTML = "00:" + minDec.innerHTML + minCen.innerHTML + ":" + secDec.innerHTML + secCen.innerHTML + ":" + milSec.innerHTML;
  splitsList.appendChild(newLi);
};

Chronometer.prototype.counter = function () {
  var secCen = 0;
  var secDec = 0;
  var minCen = 0;
  var minDec = 0;
  var milSec = 0;
  this.intervalMil = setInterval (function () {
    milSec++;
  if (milSec === 99) {
    milSec = 0;
  }
  milSecDigit.innerHTML = milSec;
}, 10);
  this.intervalID = setInterval (function () {
    secCen++;
  if (secCen > 9) {
      secCen = 0;
      secDec++;
      }
  if (secDec === 5 && secCen === 9) {
      secDec = 0;
      minCen++;
  }
  if (minCen > 9) {
      minCen = 0;
      minDec++;
  }
  if (minDec === 5 && minCen === 9) {
      minDec = 0;
      minCen = 0;
  }
  secCenDigit.innerHTML = secCen;
  secDecDigit.innerHTML = secDec;
  minCenDigit.innerHTML = minCen;
  minDecDigit.innerHTML = minDec;
}, 1000 );

};
