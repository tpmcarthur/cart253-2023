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
    fill(255,0,0);
    stroke(0,255,255);
    strokeWeight(10);
    rect(100,100,100,100);
    pop();

    push();
    fill(0,0,255);
    rect(300, 100, 100, 100);
    pop();
  }

