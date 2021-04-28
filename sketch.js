var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var firstimg,secondimg,thirdimg;

var rankRef = 0;
var passedFinish;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  firstimg = loadImage("images/first.png");
  secondimg = loadImage("images/second.png");
  thirdimg = loadImage("images/third.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("orange");

  if(playerCount === 4&&rankRef===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(rankRef===4){
    game.update(2);
  }
  if(gameState === 2&&rankRef===4){
    game.displayRank();
  }
 
}
