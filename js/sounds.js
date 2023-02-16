const audioContainerStart = document.getElementById("audioContainerStart");
const audioContainerCount = document.getElementById("audioContainerCount");
const audioContainerCorrect = document.getElementById("audioContainerCorrect");
const audioContainerGameOver = document.getElementById("audioContainerGameOver");

function playAudio(audioElement, action) {
    if (action === 'play') {
        audioElement.play();
    } else if (action === 'pause') {
        audioElement.pause();
    }
}

function playstart() {
    playAudio(audioContainerStart, 'play');
}

function pausestart() {
    playAudio(audioContainerStart, 'pause');
}

function playcount() {
    playAudio(audioContainerCount, 'play');
}

function pausecount() {
    playAudio(audioContainerCount, 'pause');
}

function playcorrect() {
    playAudio(audioContainerCorrect, 'play');
}

function playgameover() {
    playAudio(audioContainerGameOver, 'play');
}
