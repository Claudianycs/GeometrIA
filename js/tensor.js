// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/-6Bi_UlE4/";

let model, webcam, labelContainer, maxPredictions, point, scoretotal, mudar, counter;;

let score = 0;

let timer = 60;
let btn = document.getElementById('codigo');

// Load the image model and setup the webcam

let isIos = false;
// fix when running demo in ios, video will be frozen;
if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
    isIos = true;
}

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = false; // whether to flip the webcam
    const width = 360;
    const height = 360;
    webcam = new tmImage.Webcam(width, height, flip);
    await webcam.setup({ facingMode: "environment" });
    await webcam.setup(); // request access to the webcam

    if (isIos) {
        document.getElementById('webcam-container').appendChild(webcam.webcam); // webcam object needs to be added in any case to make this work on iOS
        // grab video-object in any way you want and set the attributes
        const webCamVideo = document.getElementsByTagName('video')[0];
        webCamVideo.setAttribute("playsinline", true);
        webCamVideo.facingMode = "true";// written with "setAttribute" bc. iOS buggs otherwise
        webCamVideo.muted = "true";
        webCamVideo.style.width = width + 'px';
        webCamVideo.style.height = height + 'px';
    } else {
        document.getElementById("webcam-container").appendChild(webcam.canvas);
    }
    // append elements to the DOM
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
    webcam.play();
    window.requestAnimationFrame(loop);
}

/*--------------------------------------------------------------- */
async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

/*-------------------------- SORTEIO SÓLIDO-------------------------------- */
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
        document.getElementById("texto-solido").innerHTML = "Um cilindro é o objeto tridimensional formado por duas bases circulares em planos distintos e paralelos e por todos os pontos entre essas bases";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/cilindro.png'>";
    } else if (mudar == 1) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "O cone é um sólido geométrico obtido quando se tem uma pirâmide cuja base é um polígono regular, o número de lados da base tende ao infinito e a medida de lado do polígono tende a zero.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/cone.png'>";
    } else if (mudar == 2) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um cubo ou hexaedro regular é um poliedro com 6 faces congruentes. Além disso, é um dos cinco sólidos platônicos, pois: cada face tem 4 arestas; de cada vértice partem 3 arestas";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/cubo.png'>";
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
        document.getElementById("texto-solido").innerHTML = "Uma pirâmide quadrada é uma pirâmide que tem uma base quadrada, sendo constituída por 1 quadrado e 4 triângulos.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/piramide.png'>";
    } else if (mudar == 6) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um prisma triangular é um prisma de três lados; é um poliedro feito de uma base triangular, uma cópia traduzida e 3 faces que unem os lados correspondentes. ";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/prisma.png'>";

    } else {
        console.error(img);
    }

}
/*--------------------------------------------------------------- */
function iniciando() {
    $(document).ready(function () {
        $('#myModal').modal('show');
        init();
        solidos();
        playstart();

    });

}
/*------------------------TIMER GAMER------------------------------------ */

btn.addEventListener('click', () => {
    btn.disabled = true;
    counter = setInterval(startTimer, 1000);
});

function startTimer() {
    timer--;
    document.getElementById("timer").innerText = "" + timer;
    if (timer === 0) {
        gameover();
        webcam.pause();
        btn.disabled = false;
        clearInterval(counter);
        timer = 60;
        document.getElementById("timer").innerText = "" + timer;
    }
}

function pauseTimer() {
    clearInterval(counter);
}

// Initial display of the timer
document.getElementById("timer").innerText = "" + timer;


// Initial display of the timer
document.getElementById("timer").innerText = "" + timer;



/* ------------------ PREDIÇÃO----------- */
async function predict() {
    try {
      const prediction = isIos
        ? await model.predict(webcam.webcam)
        : await model.predict(webcam.canvas);
  
      for (let i = 0; i < maxPredictions; i++) {
        const percentual = prediction[i].probability * 100;
  
        if (percentual.toFixed(0) > 85 && i !== 7) {
          const solids = [
            "CILINDRO",
            "CONE",
            "CUBO",
            "ESFERA",
            "PARALELEPIPEDO",
            "PIRÂMIDE QUADRANGULAR",
            "PRISMA TRIANGULAR",
          ];
  
          if (mudar === i) {
            document.getElementById("nomesolido1").innerHTML =
              percentual.toFixed(0) + `% semelhante a um ${solids[i]}`;
            score += 1;
            playcorrect();
            document.getElementById("responsive-botton-next").style.display = "block";
          }
        }
  
        if (percentual.toFixed(0) < 80) {
          document.getElementById("nomesolido2").innerHTML =
            percentual.toFixed(0) + `% semelhante a um(a) ${prediction[i].className}`;
        } else if (prediction[i].probability === 0) {
          document.getElementById("nomesolido2").innerHTML = "";
        }
      }
  
      document.getElementById("score").innerHTML = score.toString();
    } catch (error) {
      console.log(error);
    }
  }
  

/*---------------*/

/*-------FUNÇÃO NEXT--------*/
function next() {
    try {
        pausestart();
        playcorrect();
        pauseTimer();
        webcam.pause();

        const responsiveButtonNext = document.getElementById("responsive-botton-next");
        responsiveButtonNext.style.display = "none";
    } catch (error) {
        console.log(error);
    }
}

/*-------REINICIANDO JOGO--------*/
function reiniciando() {
    $('#myModal').modal('show');
    solidos();

    const responsiveButtonNext = document.getElementById("responsive-botton-next");
    responsiveButtonNext.style.display = "none";

    webcam.play();
    window.requestAnimationFrame(loop);

    $('#codigo').prop("disabled", false).click(function () {
        $('#myModal').modal('show');
    });
}


/*-------FUNÇÃO GAME OVER--------*/

function gameover() {
    $('#myModalGameOver').modal('show');
    webcam.stop();

    const pontos = document.getElementById("pontos");
    pontos.innerText = `${score} pontos`;
}


/*-------FUNÇÃO RESET GAME--------*/

function resetGame() {
    // Reset timer and score
    score = 0;
    document.getElementById("score").innerText = "0";
    pauseTimer();
    startTimer(60);
  
    // Reset camera
    webcam.play();
    window.requestAnimationFrame(loop);
  
    // Close modal (if present)
    $('#myModalGameOver').modal('hide');
  
    // Reload the page to restart the game
    location.reload();
  }
  

  