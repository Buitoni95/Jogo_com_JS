//códigos do ator
//ator
let xAtor = 100;
let yAtor = 366;
let colisao = false
let placar = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3}
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3
      }
    }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3}
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      voltaParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        placar -= 1
      }
     
    }
  }
}
function voltaParaPosicaoInicial(){
  yAtor = 366
}
function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 60)
  text(placar, 247,30)
}
function marcaPonto(){
  if (yAtor < 21){
    placar += 1;
    voltaParaPosicaoInicial(); 
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return placar > 0
}
function podeSeMover(){
  return yAtor < 366
}