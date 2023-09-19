/***********************
Exercise 1: I like to move it!
Taylor McArthur

Mapping and Constrain
***********************/

"use strict";

/**
 * Description of preload
*/
function preload() {

}

//Declaring variables
let backgroundShade = 0;

let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 2,
  fill: 255
}

function setup(){
  createCanvas(500,500);
}

//Draw mouse shape
function draw(){
  background(backgroundShade);

  circle.x +=circle.speed;
  circle.x = constrain(circle.x,0,width);

  
  circle.fill = map(circle.x,0,width,0,255);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);


  // console.log(`circle.x: ${circle.x}, circle.y: ${circle.y}, circle.size: ${circle.size},`);
}