/**
 * 7.1 Eat em up - done
 * 7.2 Introducing Arrays - done
 * 7.3 The Nature of Arrays - started
 * Taylor McArthur
 * 
 * 
 */

"use strict";
// An array of different playback rates to use with our dog bark
// 1 means normal rate, greater than one increases the speed and pitch
// So 3 id three times faster with a correspondingly higher pitch 

let rates = [1.5, 1.75, 2.25, 2.5, 2.75, 3];

let barkSFX;

//PreLoad
function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}

//Setup
function setup() {
    createCanvas(600, 600);
}

//Draw
function draw() {
    background(0);
}

// mousePressed() plays a dog bark at a randomly rate
function mousePressed() {
    //Choose a random rate from that array 
    let barkRate = random(rates);
    // set the barking sound effect to that rate
    barkSFX.rate(barkRate);
    // play the barking sound
    barkSFX.play();
}










