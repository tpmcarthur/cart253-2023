/***********************
Exercise 1: I like to move it!
Taylor McArthur

Debugging variables
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
  size: 200,
  speed: 2
}; 

function setup(){
  createCanvas(500,500);
}

//Draw mouse shape
function draw(){
  background(backgroundShade);
  circle.x +=circle.speed;
  ellipse(circle.x,circle.y,circle.size);

  // console.log(`circle.x: ${circle.x}, circle.y: ${circle.y}, circle.size: ${circle.size},`);
}