/***********************
Exercise 1: I like to move it!
Taylor McArthur

Draws a face on the canvas
***********************/

"use strict";

/**
 * Description of preload
*/
function preload() {

}

function setup(){
  createCanvas(windowWidth,windowHeight);

}
//Draw mouse shape
function draw(){
  background(255,0,0);
  rectMode(CENTER);
  rect(250,250, 100,100);
}