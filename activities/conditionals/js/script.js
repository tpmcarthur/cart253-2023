/**
 * Booleans 4.3
 * Taylor McArthur
 * 
 *  
 * Learning Booleans
 */

"use strict";


/**
 * Description of preload
*/
function preload() {

}

let displayCircle = false;

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

    if(mouseIsPressed){
        displayCircle = true;
    }

    if(displayCircle){
        ellipse(250,250,100,100);
    }
}

