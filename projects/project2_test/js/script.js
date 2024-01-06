/**
 * Project 2
 * Taylor McArthur
 * 
 * This is the beginning stages of my prototype project2. I wanted to explore generated art with code and object oriented programming to create a small yet meaningful project. I decided I wanted to create something honouring the passing of my mushum MacNeil McArthur (Sweetgrass Echo Lodge). He always told us the Milky Way is the river in the sky and where we will go after we have had our time on this earth. His influence led to a passion for the wonders of the sky and has inspired a lot of my work. Now, when I look up to the stars I know one more has been added as his spirit is up there.
 */

"use strict";
let font;
let state = `title`; //The beginning of the simulation

let titleColorA, titleColorB; //defining variables for two different colors
let titleMix = 0; // mixing the two colors together
let titleEasing = 0.05; // 1.o to 0 

//Description of preload
function preload() {
    font = loadFont('assets/Nexa Bold.otf');
    mySound = loadSound('./music.mp3');
    //heartbeatSound = loadSound('');

}

//Description of setup
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    textFont(font);

    titleColorA = color('#ffeda0'); // warm colour 1
    titleColorB = color('#ffa585'); // warm color 2 
    //Heartbeat sound
    //heartbeatSound.play();
}

//Description of draw()
function draw() {
    background(0);
    noStroke();

    let titleMixTarget = map(mouseX, 0, width, 0.0, 1.0);
    titleMix = titleMix + ((titleMixTarget - titleMix) * titleEasing);
    let titleEasedColor = lerpColor(titleColorA, titleColorB, titleMix);

    if (state === `title`) {
        title(titleEasedColor);
    }

    else if (state === `simulation`) {
        simulation();
    }

}

function title(titleColor) {
    push();
    textSize(40);
    fill(titleColor);
    textAlign(CENTER, CENTER);
    text(`E T E R N A L   L O V E`, width / 2, height / 2);
    pop();
}

function simulation() {
    // Pleione
    let x = 600;
    let y = 450;
    new Star(x, y);

    // Atlas
    let x2 = 595;
    let y2 = 400;
    new Star(x2, y2);

    // Alcyone
    let x3 = 710;
    let y3 = 440;
    new Star(x3, y3);

    // Merope
    let x4 = 800;
    let y4 = 480;
    new Star(x4, y4);

    // Electra 
    let x5 = 900;
    let y5 = 430;
    new Star(x5, y5);

    // Celaeno 
    let x6 = 900;
    let y6 = 350;
    new Star(x6, y6);

    //Taygeta 
    let x7 = 890;
    let y7 = 300;
    new Star(x7, y7);

    // Asterope
    let x8 = 790;
    let y8 = 270;
    new Star(x8, y8);

    // Maia 
    let x9 = 760;
    let y9 = 340;
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