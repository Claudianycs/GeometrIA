const audioContainerStart = document.getElementById("audioContainerStart");

const audioContainerCount = document.getElementById("audioContainerCount");

const audioContainerCorrect = document.getElementById("audioContainerCorrect");

function playstart() {
    audioContainerStart.play();

}
function pausestart() {
    audioContainerStart.pause();
}

function playcount() {
    audioContainerCount.play();

}
function playcorrect() {
    audioContainerCorrect.play();
}
function playgameover() {
    audioContainerGameOver.play();
}