window.onload = initClock;
 
function initClock() {
  var now = new Date();
  var hr  = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  if (min < 10) min = "0" + min;  // insert a leading zero
  if (sec < 10) sec = "0" + sec;
  document.getElementById('clockDisplay').innerHTML
        = "Time is " + hr + ":" + min + ":" + sec;
  setTimeout('initClock()', 500);
}