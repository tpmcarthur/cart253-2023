/**
 * Project 2
 * Taylor McArthur
 * 
 * This is the beginning stages of my prototype project2. I wanted to explore generated art with code and object oriented programming to create a small yet meaningful project. I decided I wanted to create something honouring the passing of my mushum MacNeil McArthur (Sweetgrass Echo Lodge). He always told us the Milky Way is the river in the sky and where we will go after we have had our time on this earth. His influence led to a passion for the wonders of the sky and has inspired a lot of my work. Now, when I look up to the stars I know one more has been added as his spirit is up there.
 */

"use strict";

let state = `title`; //Informing the beginning of the simulation

//Description of preload
function preload() {
    //heartbeatSound = loadSound('');

}

//Description of setup
function setup() {
    createCanvas(windowWidth, 700);
    colorMode(HSB, 360, 100, 100, 100);

    //Heartbeat sound
    //heartbeatSound.play();
}

//Description of draw()
function draw() {
    background(0);
    noStroke();

    if (state === `title`) {
        title();
    }

    else if (state === `simulation`) {
        simulation();
    }

}

function title() {
    push();
    textSize(30);
    fill(211, 211, 211);
    textAlign(CENTER, CENTER);
    text(`Eternal Love`, width / 2, height / 2);
    pop();
}

function simulation() {
    new Star();
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}

// function getAmplitude() {
// Get the amplitude volume of the heartbeat sound
// return heartbeatSound.getLevel();
// }