window.addEventListener('keypress', function (keyPressEvent) {
    let tone = document.querySelector(`audio[data-key='${keyPressEvent.keyCode}']`)
    if (!tone) return
    let pianoKey = document.querySelector(`.pianoKey[data-key='${keyPressEvent.keyCode}']`)
    
    tone.currentTime = 0
    pianoKey.classList.add('pressed')
    tone.play()
    setTimeout(function() {
        pianoKey.classList.remove('pressed')
    }, 300)
})