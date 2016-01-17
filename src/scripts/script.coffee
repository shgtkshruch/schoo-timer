'use strict'

timerElem = document.getElementById 'timer'
setInterval ->
  timerElem.textContent = new Date()
, 1000
