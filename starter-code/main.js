 var chronometer = new Chronometer();
  // Start/Stop Button
  document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");
  if (document.getElementById("btnLeft").className == "btn start"){
    chronometer.startClick();
  }else {
    chronometer.stopClick();
  }
});

  // Reset/Split Button
  document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
  if (document.getElementById("btnRight").className == "btn reset"){
    chronometer.resetClock();
  }else {
    chronometer.split();
  }
});
