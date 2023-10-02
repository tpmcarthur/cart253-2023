/**
 * Keyboard Input
 * Taylor McArthur
 * 
 * States 5.6
 */

"use strict";

let bg = 0;

//Preload 
function preload() {
}

//Set up
function setup() {
    createCanvas(500,500);

}

function draw() {
    background(bg);

    textAlign(CENTER,CENTER);
    textSize(64);
    fill(255);
    text(keyCode,width/2,height/2);

}

//Display/change colour when key is pressed
function keyPressed(){
   if (key === `a`){
    bg = 0;
   }

   else if (key === `b`){
    bg = 127;
   }

   else if (key === `c`){
    bg = 255;
   }

}



