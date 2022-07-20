
function iniciando() {
    $(document).ready(function () {
        $('#myModal').modal('show');
        pausecount();
        init();
    });

}

function playgame() {
    $(document).click(function () {
        init();
        playstart();
    });

}

function next() {
    $(document).ready(function () {
        $('#myModalNext').modal('show');
        pausestart();
        playcorrect();
        pauseTimer();  
        printsolido();
        //pontos();
    });

}

function gameover() {
    $(document).ready(function () {

        $('#myModalGameOver').modal('show');
        
    });

}