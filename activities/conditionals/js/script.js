/**
 * Intermediate drawing 
 * Taylor McArthur
 * 
 *  
 * Styling with push() and pop (), transformations
 */

"use strict";

let rectangle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed:2,
    scale: 1,
    angle: 0
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
 rectangle.vx = rectangle.speed;  
}

/**
 * Description of draw()
*/
function draw() {
    background(0);

    //Move the rectangle according to it's velocity 
    rectangle.x = rectangle.x + rectangle.vx;
    rectangle.y = rectangle.y + rectangle.vy;

    //Increase the rectangle's scale and angle
    rectangle.scale = rectangle.scale + 0.01;
    rectangle.angle = rectangle.angle + 0.05;

    //Display the rectangle
    push();
    rectMode(CENTER); //centered
    translate(rectangle.x,rectangle.y);//Translate to the rectangleposition
    scale(rectangle.scale); //apply scale
    rotate(rectangle.angle); //Apply rotation
    rect(0,0,rectangle.size,rectangle.size);//draw rectangle at 0,0 because of translate()
    pop();
  }

