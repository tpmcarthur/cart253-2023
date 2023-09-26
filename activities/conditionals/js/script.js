/**
 * Intermediate drawing 
 * Taylor McArthur
 * 
 *  
 * Styling with push() and pop (), transformations
 */

"use strict";

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

    push();
    rectMode(CENTER);
    translate(250,250);//Translate to the rectangles drawing position
    scale(2);//double the size of our rectangle
    fill(255,0,0);
    rect(0,0,100,100);//Draw the rectangle at 0,0 because we translated the origin
    pop();
  }

