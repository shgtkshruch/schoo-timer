(function() {
  'use strict';
  var intervalId, passedTime, render, reset, start, stop, timerElem, zeroFill;

  passedTime = 0;

  intervalId = null;

  timerElem = document.getElementById('timer');

  start = function() {
    if (intervalId) {
      return;
    }
    return intervalId = setInterval(function() {
      passedTime++;
      return render();
    }, 1000);
  };

  stop = function() {
    if (intervalId) {
      clearInterval(intervalId);
      return intervalId = null;
    }
  };

  reset = function() {
    stop();
    passedTime = 0;
    return render();
  };

  render = function() {
    var minutes, seconds;
    minutes = Math.floor(passedTime / 60);
    seconds = passedTime % 60;
    return timerElem.textContent = zeroFill(minutes) + ':' + zeroFill(seconds);
  };

  zeroFill = function(num) {
    return ('0' + num).slice(-2);
  };

  document.getElementById('start').addEventListener('click', start);

  document.getElementById('stop').addEventListener('click', stop);

  document.getElementById('reset').addEventListener('click', reset);

}).call(this);
