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
    createCanvas(800, 700);
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
    // Pleione
    let x = 200;
    let y = 450;
    new Star(x, y);

    // Atlas
    let x2 = 195;
    let y2 = 400;
    new Star(x2, y2);

    // Alcyone
    let x3 = 310;
    let y3 = 440;
    new Star(x3, y3);

    // Merope
    let x4 = 400;
    let y4 = 480;
    new Star(x4, y4);

    // Electra 
    let x5 = 500;
    let y5 = 430;
    new Star(x5, y5);

    // Celaeno 
    let x6 = 500;
    let y6 = 350;
    new Star(x6, y6);

    //Taygeta 
    let x7 = 490;
    let y7 = 300;
    new Star(x7, y7);

    // Asterope
    let x8 = 390;
    let y8 = 270;
    new Star(x8, y8);

    // Maia 
    let x9 = 290;
    let y9 = 250;
    new Star(x9, y9);
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