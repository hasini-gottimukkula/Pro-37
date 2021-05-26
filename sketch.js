var gameState = 0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;

var canva;

function setup() {
  canvas = createCanvas(850, 400);
  database = firebase.database;
  getState.gameState();
  getState.start();
}


function draw() {
  background("pink");


}
