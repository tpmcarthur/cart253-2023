/**
 * Project 2
 * Taylor McArthur
 * 
 * This is the beginning stages of my prototype project2. I wanted to explore generated art with code and object oriented programming to create a small yet meaningful project. I decided I wanted to create something honouring the passing of my mushum MacNeil McArthur (Sweetgrass Echo Lodge). He always told us the Milky Way is the river in the sky and where we will go after we have had our time on this earth. His influence led to a passion for the wonders of the sky and has inspired a lot of my work. Now, when I look up to the stars I know one more has been added as his spirit is up there.
 */

"use strict";

let font;

let titleInitialized = false; //Title Variables, flagged
let state = `title`; //The beginning of the pleiades
let titleColorA, titleColorB; //defining variables for two different colors
let titleMix = 0; // mixing the two colors together
let titleEasing = 0.05; // 1.o to 0 

//Stars Variables 
let stars = []; //Create an empty box for stars to go into 
let starsNum = 9; // create a star array 
let starSizes = []; // Varied star sizes

// Object 1 to store cluster 1 of stars
let pleiadesStars = {
    Pleione: { x: 600, y: 450, size: 10 },
    Atlas: { x: 595, y: 400, size: 15 },
    Alcyone: { x: 710, y: 440, size: 17 },
    Merope: { x: 800, y: 480, size: 12 },
    Electra: { x: 900, y: 430, size: 21 },
    Celaeno: { x: 900, y: 350, size: 11 },
    Tatgeta: { x: 890, y: 300, size: 23 },
    Asterope: { x: 790, y: 270, size: 14 },
    Maia: { x: 760, y: 340, size: 19 }
};

//Object 2 to store second cluster of stars
let bearStars = {
    star1: { x: 573, y: 462, size: 100 },
};

//Description of preload
function preload() {
    font = loadFont('assets/Nexa Bold.otf'); // fix spaces in font, github
}

//Description of setup
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);

    textFont(font); // Font title color gradient
    titleColorA = color('#ffeda0'); // warm colour 1
    titleColorB = color('#d65200'); // warm color 2 
}

//Store changing states here, there are four states
function draw() {
    background(262, 94, 11); //dark purple color

    // Title state with randomized generated lines
    if (state === `title`) {
        // Gradient lerp for title, here so draw can update the gradient values based on mouseX, mouseY positions
        let titleMixTarget = map(mouseX, 0, width, 0.0, 1.0);
        titleMix = lerp(titleMix, titleMixTarget, titleEasing);
        let titleEasedColor = lerpColor(titleColorA, titleColorB, titleMix);

        title(titleEasedColor); //Call title function with updated color to continiously update
    }

    // Once cliked user is brought to Pleiades constellation
    else if (state === 'pleiades') {
        new Cluster(pleiadesStars)
    }

    // Information blurb about why I chose to focus on the Pleiades constellation
    else if (state === `writeUp`) {
        writeUp();
    }

    // Once writeUp(); state has been visited multiple cluster (object 1, object 2 etc.) appear surrounding the main cluster
    else if (state === 'allClusters') {
        new Cluster(pleiadesStars)
        new Cluster(bearStars)
    }
}

//Title background lines, Lanikeia random generation upon initalization
function noiseLine(x, y) {
    let c = 100;
    let px = x;
    let py = y;

    for (let i = 0; i < c; i++) {
        let scl = 0.0015;
        let angle = noise(x * scl, y * scl, i * 0.00001) * 10;
        let w = map(i, 0, c - 1, 1, 0);
        strokeWeight(w);
        line(x, y, px, py);
        px = x;
        py = y;
        x += cos(angle) * 8;
        y += sin(angle) * 8;
    }
}

//Second cluster of stars, calling to class constructor
function bear() {
    new Cluster(bearStars);
}

// Text information write up about experience
function writeUp() {
    push();
    textSize(40);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`hey there, we've been trying to reach you`, width / 2, height / 2);
    pop();
}

//pleiades cluster created here, main centre piece 
function pleiades() {
    new Cluster(pleiadesStars);
}

// Beginning of the experience 
function title(titleColor) {
    if (!titleInitialized) {
        //Random generated lines resembling Laniakea Supercluster
        noFill();
        for (let i = 0; i < 100; i++) {
            drawingContext.shadowBlur = 15; //creating a blur/glow effect
            drawingContext.shadowColor = color(60, 30, 100); // color of blur/glow

            stroke(60, 30, 100); // line thickness

            noiseLine(random(-0.2, 1.1) * width, random(-0.2, 1.1) * height); //Generate random lines

            drawingContext.shadowBlur = 0; // Reset the blur/glow
            drawingContext.shadowColor = color(0, 0, 0, 0);
        }

        titleInitialized = true;
        noLoop(); //Stop from redrawing at 30fps, randomized upon initialization
    }
    // Title Eternal Love - Working title
    push();
    textSize(40);
    fill(titleColor);
    textAlign(CENTER, CENTER);
    text(`E T E R N A L   L O V E`, width / 2, height / 2);
    pop();
}

function mouseClicked() {
    if (state === `title`) {
        state = `pleiades`;
        loop(); // resume draw loop from Title(); - stopped so background wasn't constantly changing 
    }

    else if (state === `pleiades`) {
        for (let i = 0; i < stars.length; i++) { //Check to see if any of the stars in the array have been clicked 
            stars[i].checkClick();
        }
    }

    // If the pleiades state has been visted bring them to the state with all clusters surrounding Pleiades
    else if (state === 'writeUp') {
        state = 'allClusters'
    }
}

