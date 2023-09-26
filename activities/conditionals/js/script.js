/**
 * Mouse Input 4.6
 * Taylor McArthur
 * 
 *  
 * Mouse input
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
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }

}

