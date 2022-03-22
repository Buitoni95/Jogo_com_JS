//códigos dos carros
//carro

let xCarros = [400, 400, 400, 400, 400, 400]
let yCarros = [40, 100, 150, 200, 250, 300]
let velocidadeCarros = [2, 3, 4, 2, 5, 3]
let alturaCarro = 40
let comprimentoCarro = 50

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40)
   }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1 ) { 
    xCarros[i] -= velocidadeCarros[i]
  } 
}

function carroVoltaParaPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600 
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}