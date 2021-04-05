var form,game,player,database,playerCount
var guideline

var gameState = 0
var allPlayers


function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

 database = firebase.database()

//form = new Form()
game = new Game()
game.getState()
game.start()

  }

function draw() {
  background(255,255,255);  
  
}