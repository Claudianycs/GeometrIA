/*SORTEIO SÓLIDOS*/
function sortear() {

  var img = new Array(
      "assets/solidos/solidos01.png",
      "assets/solidos/solidos02.png",
      "assets/solidos/solidos03.png",
      "assets/solidos/solidos04.png",
      "assets/solidos/solidos05.png",
      "assets/solidos/solidos06.png",
      "assets/solidos/solidos07.png");

  var mudar = Math.floor(Math.random() * img.length);

  if (mudar == 0) {
      document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
      document.getElementById("texto-solido").innerHTML = "Um prisma triangular é um prisma de três lados; é um poliedro feito de uma base triangular, uma cópia traduzida e 3 faces que unem os lados correspondentes. ";
  } else if (mudar == 1) {
      document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
      document.getElementById("texto-solido").innerHTML = "O cone é um sólido geométrico obtido quando se tem uma pirâmide cuja base é um polígono regular, o número de lados da base tende ao infinito e a medida de lado do polígono tende a zero.";
  } else if (mudar == 2) {
      document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
      document.getElementById("texto-solido").innerHTML = "Uma pirâmide quadrada é uma pirâmide que tem uma base quadrada. Se os lados da pirâmide são triângulos equiláteros e é um dos Sólidos de Johnson. Se o ápice está perpendicularmente acima do centro do quadrado, terá uma simetria C₄ᵥ. É constituída por 1 quadrado e 4 triângulos.";
  } else if (mudar == 3) {
      document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
      document.getElementById("texto-solido").innerHTML = "A esfera pode ser definida como uma sequência de pontos alinhados em todos os sentidos à mesma distância de um centro comum.";
  } else if (mudar == 4) {
      document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
      document.getElementById("texto-solido").innerHTML = "Paralelepípedo ou bloco retangular é a designação dada a um prisma cujas faces são paralelogramos. Um paralelepípedo tem seis faces, sendo que duas são idênticas e paralelas entre si. Os paralelepípedos podem ser retos ou oblíquos, consoante as suas faces laterais sejam perpendiculares ou não à base.";
  } else if (mudar == 5) {
      document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
      document.getElementById("texto-solido").innerHTML = "Um cubo ou hexaedro regular é um poliedro com 6 faces congruentes. Além disso, é um dos cinco sólidos platônicos, pois: cada face tem 4 arestas; de cada vértice partem 3 arestas; vale a relação de Euler: {V-A+F=2}, onde V representa o número de vértices, A o número de arestas e F o número de faces.";
  } else {        
      document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
      document.getElementById("texto-solido").innerHTML = "Um cilindro é o objeto tridimensional delimitado pela superfície de translação completa de um segmento de reta que se move paralelamente a si mesmo, e se apoia em uma circunferência";
  }

  $(document).ready(function () {
      $('.custom-url').attr('href', url_serv + '/GAMEIA/contagem.html?codigo='+mudar);
});
}

/* ------------------ CONTAGEM REGRESSIVA ---------------------- */
let cta = document.getElementById('init');
let count = 6;

$('.cta').prop("disabled", true).click(function() {
  counter = setInterval(() => {
    Count()
    playstart()
  },1000)
})

function Count() {
  count--;
  document.getElementById("time").innerText = count;
  if(count == 1) {
    cta.disabled = false;
    clearInterval(counter);
    count = 05;
    window.location.href = "main.html"
  }
}


/*-------------------------------------------------------------------- */


