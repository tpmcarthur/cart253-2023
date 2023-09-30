/**
 * text
 * Taylor McArthur
 * 
 * text 5.4
 */

"use strict";


let hello = {
    string: `Hello World`,
    x: 250,
    y: 250,
    vx: 5,
    vy: 1,
    size: 64

};

//Preload 
function preload() {

}


//Set up
function setup() {
    createCanvas(500,500);

}


//Displaying the text 
function draw() {
    background(0);

    hello.x = hello.x + hello.vx;
    hello.y = hello.y + hello.vy;

    hello.size = hello.size + 1;

    textAlign(CENTER,CENTER);
    textSize(hello.size);
    textStyle(BOLD);

    fill(200,50,200);
    stroke(0,255,248);
    strokeWeight(3);

    text(hello.string,hello.x,hello.y);
}

