// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/6BFn4KAKX/";

let model, webcam, labelContainer, maxPredictions, point, scoretotal, mudar;

let score = 0;
let timer = 31;
let btn = document.getElementById('codigo');

// Load the image model and setup the webcam
async function solidos() {

    var img = new Array(
        "assets/solidos/solidos01.png",
        "assets/solidos/solidos02.png",
        "assets/solidos/solidos03.png",
        "assets/solidos/solidos04.png",
        "assets/solidos/solidos05.png",
        "assets/solidos/solidos06.png",
        "assets/solidos/solidos07.png");

    mudar = Math.floor(Math.random() * img.length);

    if (mudar == 0) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um prisma triangular é um prisma de três lados; é um poliedro feito de uma base triangular, uma cópia traduzida e 3 faces que unem os lados correspondentes. ";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/prisma.png'>";
    } else if (mudar == 1) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "O cone é um sólido geométrico obtido quando se tem uma pirâmide cuja base é um polígono regular, o número de lados da base tende ao infinito e a medida de lado do polígono tende a zero.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/cone.png'>";
    } else if (mudar == 2) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Uma pirâmide quadrada é uma pirâmide que tem uma base quadrada, sendo constituída por 1 quadrado e 4 triângulos.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/piramide.png'>";
    } else if (mudar == 3) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "A esfera pode ser definida como uma sequência de pontos alinhados em todos os sentidos à mesma distância de um centro comum.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/esfera.png'>";
    } else if (mudar == 4) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Paralelepípedo ou bloco retangular é o nome dado a um prisma cujas faces são paralelogramos. Um paralelepípedo tem seis faces, sendo que duas são idênticas e paralelas entre si.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/paralelepipedo.png'>";
    } else if (mudar == 5) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um cubo ou hexaedro regular é um poliedro com 6 faces congruentes. Além disso, é um dos cinco sólidos platônicos, pois: cada face tem 4 arestas; de cada vértice partem 3 arestas";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/cubo.png'>";
    } else if (mudar == 6) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um cilindro é o objeto tridimensional formado por duas bases circulares em planos distintos e paralelos e por todos os pontos entre essas bases";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/cilindro.png'>";

    } else {
        console.error(img);
    }

}

async function init() {

    const video = document.getElementById('video');
    const button = document.getElementById('codigo');


    button.addEventListener('click', event => {
        const videoConstraints = {
            facingMode: 'environment'
        };
        const constraints = {
            video: videoConstraints,
            audio: false
        };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(error => {
                console.error(error);
            });
    });

    navigator.mediaDevices.enumerateDevices().then(gotDevices);


}
/* ---------------------- CAM CAPTURE ---------------------*/
function printsolido() {

    html2canvas(webcam.canvas).then(canvas => {

        document.getElementById("capture-solido").appendChild(canvas);
    });

    return pontos();
}
/*------------------------TIMER GAMER------------------------------------ */

btn.addEventListener('click', () => {
    btn.disabled = true;
    counter = setInterval(() => {
        myTimer()
    }, 1000)
})

function myTimer() {
    timer--;
    document.getElementById("timer").innerText = "" + timer;
    if (timer == 0) {
        gameover();
        webcam.pause();
        btn.disabled = false;
        clearInterval(counter);
        timer = 30;
    }
}

function pauseTimer() {
    $(document).ready(function () {
        clearInterval(counter);

    });
}

/*--------------------------------------------------------------- */
async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

function pontos() {

    score += 1;
    document.getElementById("score").innerHTML = "" + score;

}

function atualizapontos() {
    score += 1;
    score.getElementById("score").innerHTML = "" + score;

}
/* ------------------ PREDIÇÃO----------- */
async function predict() {

    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        /*  const classPrediction =
              prediction[i].className + ": " + prediction[i].probability.toFixed(2);
          labelContainer.childNodes[i].innerHTML = classPrediction;*/


        if (prediction[i].probability > 0.94) {
            if (mudar == 0 && i == 0) {
                next();
                pontos();

                document.getElementById("nomesolido").innerHTML = "Prisma Triângular";

                break;
            } else if (mudar == 1 && i == 1) {
                pontos();
                next();


                document.getElementById("nomesolido").innerHTML = "Cone";
                break;
            } else if (mudar == 2 && i == 2) {
                pontos();
                next();


                document.getElementById("nomesolido").innerHTML = "Pirâmide";
                break;

            } else if (mudar == 3 && i == 3) {
                pontos();
                next();

                document.getElementById("nomesolido").innerHTML = "Esfera";
                break;

            } else if (mudar == 4 && i == 4) {
                pontos();
                next();

                document.getElementById("nomesolido").innerHTML = "Parelelepípedo";
                break;


            } else if (mudar == 5 && i == 5) {
                next();
                pontos();

                document.getElementById("nomesolido").innerHTML = "Cilindro";
                break;

            } else if (mudar == 6 && i == 6) {
                next();
                pontos();

                document.getElementById("nomesolido").innerHTML = "Cubo";

                break;
            } else {
                document.getElementById("nomesolido").innerHTML = "...";
            }
        }// fim if proba
        else {

        }

    }// fim if proba
}

function iniciando() {
    $(document).ready(function () {
        $('#myModal').modal('show');
        playstart();
        pausecount();
        solidos();
        init();
    });

}

function next() {
    $(document).ready(function () {
        $('#myModalNext').modal('show');
        pausestart();
        playcorrect();
        pauseTimer();
        printsolido();
        webcam.pause();
    });

}

function reiniciando() {
    $(document).ready(function () {
        $('#myModal').modal('show');
        pausecount();
        solidos();


        webcam.play(); // update the webcam frame
        window.requestAnimationFrame(loop);

    });

    $('#codigo').prop("disabled", false).click(function () {
        $('#myModal').modal('show');
        myTimer();

    });

}

function gameover() {
    $(document).ready(function () {
        $('#myModalGameOver').modal('show');
        webcam.pause();

        document.getElementById("pontos").innerText = "" + score + " pontos";
    });

}