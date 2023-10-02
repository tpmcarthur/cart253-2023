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
    if (keyCode === UP_ARROW){
        bg = bg + 10;
        bg = constrain(bg,0,255);
    }

    //down key
    else if (keyCode === DOWN_ARROW){
        bg = bg - 10;
        bg = constrain(bg,0,255);
    }

}



