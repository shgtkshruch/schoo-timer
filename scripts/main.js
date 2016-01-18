(function() {
  'use strict';
  var Timer, timer;

  Timer = (function() {
    function Timer(elem) {
      this.timerElem = elem;
      this.passedTime = 0;
      this.intervalId = null;
    }

    Timer.prototype.start = function() {
      if (this.intervalId !== null) {
        return;
      }
      return this.intervalId = setInterval((function(_this) {
        return function() {
          _this.passedTime++;
          return _this.render();
        };
      })(this), 1000);
    };

    Timer.prototype.stop = function() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        return this.intervalId = null;
      }
    };

    Timer.prototype.reset = function() {
      this.stop();
      this.passedTime = 0;
      return this.render();
    };

    Timer.prototype.render = function() {
      var minutes, seconds;
      minutes = Math.floor(this.passedTime / 60);
      seconds = this.passedTime % 60;
      return this.timerElem.textContent = this.zeroFill(minutes) + ':' + this.zeroFill(seconds);
    };

    Timer.prototype.zeroFill = function(num) {
      return ('0' + num).slice(-2);
    };

    return Timer;

  })();

  timer = new Timer(document.getElementById('timer'));

  document.getElementById('start').addEventListener('click', function() {
    return timer.start();
  });

  document.getElementById('stop').addEventListener('click', function() {
    return timer.stop();
  });

  document.getElementById('reset').addEventListener('click', function() {
    return timer.reset();
  });

}).call(this);
