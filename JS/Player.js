class Player {
constructor(){
  this.index = null
  this.distance = 0
  this.name = null
  this.rank = null
}  

getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name, 
      distance: this.distance
    });
  }
  static getPlayerinfo(){
   var playerinfo = database.ref("players")
   playerinfo.on("value",(data)=>{
    allPlayers = data.val()
  
   })
  }

  getCarsAtEnd(){
    database.ref("CarsAtEnd").on("value",(data)=>{
      this.rank = data.val()
    })
  }

  static UpdateCarsAtEnd(rank){
    database.ref("/").update({
      CarsAtEnd:rank
    })
  }

  
}