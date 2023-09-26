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

   //circle follows mouse
   circle.x = mouseX;
   circle.y = mouseY;

   ellipse(circle.x,circle.y,circle.size);
}

