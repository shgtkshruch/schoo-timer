'use strict'

class Timer
  constructor: (elem) ->
    @timerElem = elem
    @passedTime = 0
    @intervalId = null

  start: ->
    if @intervalId isnt null then return

    @intervalId = setInterval =>
      @passedTime++
      @render()
    , 1000

  stop: ->
    if @intervalId isnt null
      clearInterval @intervalId
      @intervalId = null

  reset: ->
    @stop()
    @passedTime = 0
    @render()

  render: ->
    minutes = Math.floor @passedTime / 60
    seconds = @passedTime % 60
    @timerElem.textContent = @zeroFill(minutes) + ':' + @zeroFill(seconds)

  zeroFill: (num) ->
    ('0' + num).slice(-2)

timer = new Timer(document.getElementById('timer'))

document.getElementById('start').addEventListener('click', -> timer.start())
document.getElementById('stop').addEventListener('click', -> timer.stop())
document.getElementById('reset').addEventListener('click', -> timer.reset())
