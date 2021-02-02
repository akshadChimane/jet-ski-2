var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function preload(){
  backgroundImage=loadImage('images/download.jpg');
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage)
  if(gameState===1){
    clear()
    game.play()
  }
}
