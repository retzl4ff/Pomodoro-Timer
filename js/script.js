var workTime = 1500
var currentTime = 0
var bodyPage = document.querySelector('body')
var breakText = document.querySelector('h3')
var startButton = document.getElementById('start-button')
var resetButton = document.getElementById('reset-button')
var skipButton = document.getElementById('skip-button')
var appendMinutes = document.querySelector('#pomo-minutes')
var appendSeconds = document.querySelector('#pomo-seconds')
var interval
var timeOut

const timeToMinutes = time => Math.floor(time / 60)
const timeToSeconds = time => time % 60
const formatTime = time => String(time).padStart(2, '0')

function countDown() {
    currentTime--
    
    var minutes = formatTime(timeToMinutes(currentTime))
    var seconds = formatTime(timeToSeconds(currentTime))

    appendMinutes.innerHTML = minutes
    appendSeconds.innerHTML = seconds

    if(currentTime === 0){
        clearInterval(interval)
        funcSkipButton()
    }
}

startButton.onclick = function(){
    currentTime = workTime
    interval = setInterval(countDown, 1000)
}

resetButton.onclick = function(){
    clearInterval(interval)
    location.reload()
}

const funcSkipButton = skipButton.onclick = function breakUp() {
    clearInterval(interval)
    workTime = 300
    currentTime = workTime
    appendMinutes.innerHTML = formatTime(timeToMinutes(currentTime))
    appendSeconds.innerHTML = formatTime(timeToSeconds(currentTime))
    var pomoTimer = document.getElementById('pomo-timer')
    breakText.style.fontSize = '35px'
    breakText.innerHTML = 'Time to stop and relax!'
    pomoTimer.style.color = 'white'
    bodyPage.style.color = 'gray'
    bodyPage.style.transition = '.5s'
    bodyPage.style.backgroundColor = 'lightgray'
}
