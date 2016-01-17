'use strict'

passedTime = 0
intervalId = null
timerElem = document.getElementById 'timer'

start = ->
  if intervalId
    return

  intervalId = setInterval ->
    passedTime++
    render()
  , 1000

stop = ->
  if intervalId
    clearInterval intervalId
    intervalId = null

reset = ->
  stop()
  passedTime = 0
  render()

render = ->
  minutes = Math.floor passedTime / 60
  seconds = passedTime % 60
  timerElem.textContent = zeroFill(minutes) + ':' + zeroFill(seconds)

zeroFill = (num) ->
  ('0' + num).slice(-2)

document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)
document.getElementById('reset').addEventListener('click', reset)
