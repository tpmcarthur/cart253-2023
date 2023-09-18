/***********************
Exercise 1: I like to move it!
Taylor McArthur

Learning about changing variables, math
***********************/

"use strict";

/**
 * Description of preload
*/
function preload() {

}

//Declaring variables
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;
let circleAcceleration = 0.25;

function setup(){
  createCanvas(500,500);
}

//Draw mouse shape
function draw(){
  background(backgroundShade);
  circleX +=circleSpeed;
  circleSpeed += circleAcceleration;
  ellipse(circleX,circleY,circleSize);

}