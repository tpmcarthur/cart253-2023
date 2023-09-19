/***********************
Exercise 1: I like to move it!
Taylor McArthur

Introducing random numbers
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
  x: 250,
  y: 250,
  size: 100,
  speed: 2,
  fill:0
}

function setup(){
  createCanvas(500,500);
}

//Draw mouse shape
function draw(){
  background(backgroundShade);

  circle.x +=circle.speed;
  circle.speed = random(-5,5);
  
  circle.y = random (0,height);
  circle.size = random(10,100);

  circle.fill = random(0,255);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);


  // console.log(`circle.x: ${circle.x}, circle.y: ${circle.y}, circle.size: ${circle.size},`);
}