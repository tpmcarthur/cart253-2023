/**
 * Mouse Input 4.6
 * Taylor McArthur
 * 
 *  
 * Mouse input
 */

"use strict";

let circle = {
    x: 250,
    y: 250,
    size: 100
}

let square = {
    x: 400,
    y: 100,
    size: 100,
    fill: {
        r: 255,
        g: 99,
        b: 71
    }
};

/**
 * Description of preload
*/
function preload() {

}

/**
 * Description of setup
*/
function setup() {
 createCanvas(500,500);   

}

/**
 * Description of draw()
*/
function draw() {
   background(0);

//    ellipse(circle.x,circle.y,circle.size);

   rectMode(CENTER);
   noStroke();
   fill(square.fill.r,square.fill.g,square.fill.b);
   rect(square.x,square.y,square.size);
}

function mousePressed(){
    square.x = mouseX;
    square.y = mouseY;
}

