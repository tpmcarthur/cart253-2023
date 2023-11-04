/**
 * 7.1 Eat em up - done
 * 7.2 Introducing Arrays - done
 * 7.3 The Nature of Arrays - started
 * Taylor McArthur
 * 
 * 
 */

"use strict";

let circle = {
    x: 0,
    y: 0,
    size: 100,
    trail: [],
    maxTrail: 10 // New max number of position in the trail array 
}

//PreLoad
function preload() {

}

//Setup
function setup() {
    createCanvas(600, 600);


}

//Draw
function draw() {
    background(0);

    // Use a for loop to go through each element in the circle's trail array in order
    for (let i = 0; i < circle.trail.length; i++) {
        // get the element at the index indicated by i (0, then 1, then 2, etc.)
        let element = circle.trail[i];
        // draw an ellipse the same size as the circle at that position
        ellipse(element.x, element.y, circle.size);
    }

    // move the circle to the mouse position
    circle.x = mouseX;
    circle.y = mouseY;

    // draw the circle
    ellipse(circle.x, circle.y, circle.size);

    // Create a new position object that stores where the circle is now 
    // which we can add to the trail to trace the path of the circle
    let newTrailPosition = {
        x: circle.x,
        y: circle.y
    };

    // add the position to the circles trail array 
    circle.trail.push(newTrailPosition);

    // new, check if the trail's length has exceed the maximum
    if (circle.trail.length > circle.maxTrail) {
        // If it has, remove the oldest element (the one at the start of the array)
        circle.trail.shift();
    }

}











