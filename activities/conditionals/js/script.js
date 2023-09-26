/**
 * Loops 4.4
 * Taylor McArthur
 * 
 *  
 * Loops exercise, learning how to use loops for effieceny 
 */

"use strict";


/**
 * Description of preload
*/
function preload() {

}

let caterpillar = {
    x: 100,
    y: 250,
    segmentSize: 50
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
    noStroke();
    fill(100,200,100);

    // let x = caterpillar.x;
    // let numSegments = 5;
    // let segmentsDrawn = 0;

    // while(segmentsDrawn < numSegments){
    //     ellipse(x,caterpillar.y,caterpillar.segmentSize); 
    //     x = x + 40;  
    //     segmentsDrawn++;
    // }

    let x = caterpillar.x;
    let numSegments = 10;

    for(let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++){
      ellipse(x,caterpillar.y,caterpillar.segmentSize);
      x = x + 40;
    }
}

