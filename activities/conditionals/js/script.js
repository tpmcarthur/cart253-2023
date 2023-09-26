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
    push();
    rectMode(CENTER);
    rotate(PI/4); // Rotate the following shape by PI/4 radians (45 degrees)
    fill(255,0,0);
    rect(250,250,100,100);
    pop();
  }

