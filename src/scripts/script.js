(() => {
  'use strict';

  class Timer {
    constructor(elem) {
      this.timerElem = elem;
      this.passedTime = 0;
      this.intervalId = null;
    }

    start() {
      if (this.intervalId !== null) {
        return
      }

      this.intervalId = setInterval(() => {
        this.passedTime++;
        this.render();
      }, 1000);
    }

    stop() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

    reset() {
      this.stop();
      this.passedTime = 0;
      this.render();
    }

    render() {
      var minutes = Math.floor(this.passedTime / 60);
      var seconds = this.passedTime % 60;
      this.timerElem.textContent = this.zeroFill(minutes) + ':' + this.zeroFill(seconds);
    }

    zeroFill(num) {
      return ('0' + num).slice(-2);
    }
  }

  var timer = new Timer(document.getElementById('timer'));

  document.getElementById('start').addEventListener('click', () => timer.start());
  document.getElementById('stop').addEventListener('click', () => timer.stop());
  document.getElementById('reset').addEventListener('click', () => timer.reset());
})();
