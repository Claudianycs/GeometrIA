# GeometrIA 🤖

Este produto educacional foi desenvolvido durante o Mestrado Profissional de Ensino para Educação Básica (PPG-ENEB) ofertado pelo Instituto Federal Goiano - Campus Urutaí. O Produto foi planejado com o objetivo principal contribuir com o processo de ensino-aprendizado de geometria espacial em nível básico do ensino fundamental de uma escola municipal da Região Norte do Brasil, mediante o desenvolvimento de um jogo educacional com Inteligência Artificial.

- 🎮[Jogar](https://claudianycs.github.io/GeometrIA/)
- 📚[Video Demo](https://youtu.be/kOFaPseyIMA)
- ⭐️[Avalie](https://forms.gle/dmcJr9FaLGis4xCw9)

⚠️ Observação: Suas imagens não estão sendo salvas durante o uso da aplicação.
## Projeto 💡

Esta aplicação é experimental, portando pode apresentar algumas falhas. O modelo foi treinado com 07 classes compostas por imagens semelhantes a sólidos geométricos trabalhados em nível básico do ensino fundamental e 01 classe de background. Alimentado por Tensorflow.js e Teachable Machine by Google.

- [Modelo de aprendizagem de máquina utilizado] https://teachablemachine.withgoogle.com/models/-6Bi_UlE4/

### Treinamento: 🗂
 - Dataset: 3.500 imagens, coloridas (RGB) de dimensões 224 x 224 pixels
 - Cilindro (0), Cone (1), Cubo (2), Esfera (3), Paralelepípedo (4), Prisma Triângular (5), Pirâmide quadrângular (6), Não identificado (7)
 - Epoch: 200 
 - Batch Size: 32

### Resultados do treinamento: 📊
![testegith](https://user-images.githubusercontent.com/65419184/220518578-f5aafd2c-bae2-4c65-9068-6fd190b5bb25.png)

![pe](https://user-images.githubusercontent.com/65419184/209490155-663b37a4-9d9b-4c12-9837-783df1377565.png)
