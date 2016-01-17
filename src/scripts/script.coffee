'use strict'

timerElem = document.getElementById 'timer'
setInterval ->
  timerElem.textContent = formatTime new Date()
, 1000

formatTime = (date) ->
  zeroFill(date.getHours()) +
  ':' + zeroFill(date.getMinutes()) +
  ':' + zeroFill(date.getSeconds())

zeroFill = (num) ->
  ('0' + num).slice(-2)
