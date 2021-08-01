
var database,canvas;
var game,player,form;
var gameState = 0;
var playerCount=0;
var allPlayers;
var car1,car2,car3,car4,cars;
var distance =0;
var track,car1img,car2img,car3img,car4img,ground;

function preload() {
  track = loadImage("images/track.jpg");
  car1img = loadImage("images/car1.png")
  car2img = loadImage("images/car2.png")
  car3img = loadImage("images/car3.png")
  car4img = loadImage("images/car4.png")
  ground = loadImage("images/ground.png")
}

function setup() {

  database= firebase.database();
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  
 game = new Game();
  game.getState();
  game.start();
}


function draw() {
// background("white");
 if(playerCount === 4){
 game.update(1);
 } 
 if(gameState === 1){
 clear(); 
 game.play(); }
if(gameState === 2){
  game.end()
}

}

