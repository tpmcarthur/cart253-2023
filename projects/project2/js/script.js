/**
 * Project 2
 * Taylor McArthur
 * 
 * This is the beginning stages of my prototype project2. I wanted to explore generated art with code and object oriented programming to create a small yet meaningful project. I decided I wanted to create something honouring the passing of my mushum MacNeil McArthur (Sweetgrass Echo Lodge). He always told us the Milky Way is the river in the sky and where we will go after we have had our time on this earth. His influence led to a passion for the wonders of the sky and has inspired a lot of my work. Now, when I look up to the stars I know one more has been added as his spirit is up there.
 */

"use strict";
let stars = [1000];

//Description of preload
function preload() {
    //heartbeatSound = loadSound('');

}

//Description of setup
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    //Set up for the Bloom Effect 
    bloom = new Bloom();
    bloom.setBlur(0.8);

    //Creating point cloud
    for (let i = 0; i < 1000; i++) {
        stars.push(createVector(random(-width, width), random(-height, height), random(-500, 500)));
    };

    //Heartbeat sound
    //heartbeatSound.play();

}

//Description of draw()
function draw() {
    background(0);

    // Apply bloom effect here
    bloom.drawBloom(() => {
        //Draw the 3D point cloud
        drawPointCloud();
    });

    // Update the heartbeat according to brightness
    // let amp = getAmplitude();
    // heartbeatSound.setVolume(amp);

    // Emissions on brightness based on the heartbeat 
    // let brightness = map(amp, 0, 1, 0, 255);
    // ambientLight(brightness);

    // rotate around point cloud
    rotateSketch();
}

// Creating the point cloud
function drawPointCloud() {
    // draw point cloud using points
    strokeWeight(2);
    stroke(255, 200);
    beginShape(POINTS);
    for (let stars of stars) {
        vertex(stars.x, stars.y, stars.z);
    }
    endShape();
}

function rotateSketch() {
    // Rotate the sketch based on mouse drag
    rotateY(frameCount * 0.01);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// function getAmplitude() {
// Get the amplitude volume of the heartbeat sound
// return heartbeatSound.getLevel();
// }