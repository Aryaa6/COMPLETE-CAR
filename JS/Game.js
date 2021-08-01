class Game {
constructor(){}

getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
   if(gameState === 0){
   player = new Player(); 
   var playerCountRef = await database.ref('playerCount').once("value"); 
  if(playerCountRef.exists()){ 
  playerCount = playerCountRef.val();
  player.getCount();
  } 
  form = new Form() 
  form.display(); 
} 

  car1 = createSprite(100,200)
  car1.addImage(car1img)
  car2 = createSprite(300,200)
  car2.addImage(car2img)
  car3 = createSprite(500,200)
  car3.addImage(car3img)
  car4 = createSprite(700,200)
  car4.addImage(car4img)
  cars = [car1,car2,car3,car4]
}

play(){
  form.hide();

  Player.getPlayerinfo()
  
  player.getCarsAtEnd()

  if(allPlayers !== undefined){
    background(ground) 
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    //var displayPosition = 130
   var index = 0;
   var y;
   var x = 175;
    for(var plr in allPlayers){ 
      index = index + 1
      x = x + 200
    y = displayHeight - allPlayers[plr].distance
cars[index-1].x = x;
cars[index-1].y = y;
      
if(index===player.index){
  fill ("yellow")
  ellipse(x,y,60,60)
  cars[index-1].shapeColor = "yellow";
  camera.position.x = displayWidth/2;
  camera.position.y = cars[index-1].y
}
    
  //  textSize(15)
  //  text(allPlayers[plr].name + ": " + allPlayers[plr].distance,120,displayPosition)
  }
}
 if(keyIsDown(UP_ARROW) && player.index !== null){
   player.distance += 20
   player.update()
 }   
if(player.distance > 3850){
  gameState = 2
  player.rank += 1
  Player.UpdateCarsAtEnd(player.rank)
}
 drawSprites();
}
end(){
  console.log("gameEnd")
  console.log(player.rank)
}
}

