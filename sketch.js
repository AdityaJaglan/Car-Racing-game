
var database;
var canvas,backgroundImage,gameState=0,playerCount=0,form,player,game
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game()
    game.getState()
   game.start()
}

function draw(){
   
}

