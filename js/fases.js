
function iniciando() {
    $(document).ready(function () {
        $('#myModal').modal('show');
        init();
        solidos();
    });

}

function next() {
    $(document).ready(function () {
        $('#myModalNext').modal('show');
        pausestart();
        playcorrect();
        pauseTimer();  
        printsolido();
    });

}

function gameover() {
    $(document).ready(function () {

        $('#myModalGameOver').modal('show');
        
    });

}