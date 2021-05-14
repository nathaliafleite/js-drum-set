const playSound = function (e) {
    const pressedKey = e.key;
    const sound = document.querySelector(`audio[data-key="${pressedKey}"]`);
    const key = document.querySelector(`.key[data-key="${pressedKey}"]`);

    if (!sound) return;

    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', function() {
        key.classList.remove('playing');
    })
};

document.addEventListener("keydown", playSound);
