/**
 * Project 2
 * Taylor McArthur
 * CART 253
 
This is the beginning stages of my prototype project2. I wanted to explore generated art with code and object oriented programming to create a small yet meaningful project. I decided I wanted to create something honouring the passing of my mushum MacNeil McArthur (Sweetgrass Echo Lodge). He always told us the Milky Way is the river in the sky and where we will go after we have had our time on this earth. His influence led to a passion for the wonders of the sky and has inspired a lot of my work. Now, when I look up to the stars I know one more has been added as his spirit is up there.
 */

"use strict";

//Global Variables
let allClustersTimer; // Timer to go to final state
let theEndReached = false; // checks to see if end state is reached
let heartbeat, amplitude, font;
let fade, fadeAmount = 1; // Fade for text 
let state = `title`; //The beginning of the pleiades
let titleInitialized = false; //Title Variables, flagged

//Stars Variables 
let stars = []; //Create an empty box for stars to go into 
let starsNum = 9; // create a star array 
let starSizes = []; // Varied star sizes

// Objects to store clusters of stars with positions/sizes
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

let cancerStars = {
    star1: { x: 190, y: 180, size: 21 },
    star2: { x: 210, y: 320, size: 10 },
    star3: { x: 210, y: 500, size: 13 },
    star4: { x: 130, y: 600, size: 17 },
    star5: { x: 410, y: 620, size: 19 }
};

let virgoStars = {
    star1: { x: 1356, y: 227, size: 24 },
    star2: { x: 1356, y: 184, size: 23 },
    star3: { x: 1308, y: 338, size: 20 },
    star4: { x: 1424, y: 369, size: 15 },
    star5: { x: 1229, y: 213, size: 15 },
    star6: { x: 1248, y: 320, size: 25 },
    star7: { x: 1290, y: 169, size: 21 },
    star8: { x: 1384, y: 93, size: 18 },
    star9: { x: 1241, y: 78, size: 23 },
    star10: { x: 1419, y: 323, size: 24 },
    star11: { x: 1397, y: 182, size: 24 },
    star12: { x: 1483, y: 262, size: 21 }
};

//Description of preload
function preload() {
    font = loadFont('assets/notoSansBlack.ttf'); // unicode font
    heartbeat = loadSound('assets/sounds/heartbeat.mp3') //stock heartbeat SFX
}

//Sets up canvas and any intital settings
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    textFont(font); // Font title color gradient
    amplitude = new p5.Amplitude(); // Intialize amplitude for sound
}

//Store changing states here, there are four states
function draw() {
    background(262, 94, 11); //dark purple color

    // Title state with randomized lines
    if (state === `title`) {
        title();
    }

    // Pleiades cluster, text info - click
    else if (state === 'pleiades') {
        new Cluster(pleiadesStars); //cluster of pleiades stars
        pleiadesTitle(); //Title for state 
    }

    // Information blurb about why I chose to focus on the Pleiades constellation
    else if (state === `writeUp`) {
        writeUp();
    }

    // Once writeUp(); state has been visited multiple cluster (object 1, object 2 etc.) appear surrounding the main cluster, heartbeat SFX
    else if (state === 'allClusters') {
        new Cluster(pleiadesStars);
        new Cluster(cancerStars);
        new Cluster(virgoStars);
    }

    //Final state of project
    if (state === 'theEnd') {
        theEnd();
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

// Title function, displays title screen
function title() {
    if (!titleInitialized) {
        //Laniakea Supercluster
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
        noLoop(); //Stop from redrawing at 30fps, randomized upon initialization, also stops gradient from working?
    }

    // Title teňína 
    push();
    textSize(40);
    fill(25, 24, 97);
    textAlign(CENTER, CENTER);
    text(`t e ň í n a's  c o s m i c  e c h o`, width / 2, height / 2 - 20);

    //Subtitle text
    textSize(20);
    fill(25, 24, 97);
    textAlign(CENTER, CENTER);
    text(`click with mouse to interact`, width / 2, height / 2 + 20);
    pop();
}

//pleiades cluster created here, main centre piece 
function pleiades() {
    new Cluster(pleiadesStars);
}

//Displays title for pleiades state
function pleiadesTitle() {
    if (fade === undefined) {
        fade = 0.05;
        fadeAmount = 1;
    }
    fade += fadeAmount;

    push();
    textSize(24);
    fill(255, fade);
    textAlign(CENTER, CENTER);
    text(`Pleiades (M45)`, width / 2, height * 0.9);
    pop();
}

// Text information write up about experience
function writeUp() {
    push();
    textSize(18);
    fill(255);
    textWrap(WORD);


    let textWidth = width * 0.8;  // 80% of the canvas width
    let textX = width / 2 - textWidth / 2;  // Horizontal center
    let textY = height / 2 - 100;  // Positioning the text a bit above

    textAlign(LEFT, TOP);  // Center horizontally, start from top vertically

    text(`My Mushum, MacNeil McArthur (Sweetgrass Echo Lodge), passed down to us the treasured stories that had woven their way through generations, a legacy gifted to his grandchildren. Countless evenings by the crackling fire, he spun tales of the skies above. For as long as I can recall, a deep curiosity for the mysteries of the night sky has stirred within me, and now I understand that it was born from his stories.

He shared with us the wisdom that the Pleiades are a cosmic doorway, a portal through which our spirits journeyed to this earthly realm, entrusted with the care of our precious planet. When we bid farewell to our earthly forms, it is among the Pleiades that we will once again reunite with our celestial kin.`, textX, textY, textWidth);
    pop();
}

//cancer function, cancer star cluster
function cancer() {
    new Cluster(cancerStars);
}

//virgo function, virgo star cluster
function virgo() {
    new Cluster(virgoStars);
}

//Final state, ending 
function theEnd() {
    push();
    textSize(20);
    textWrap(WORD);
    fill(255);

    let textWidth = width * 0.8;  // 80% of the canvas width
    let textX = width / 2 - textWidth / 2;  // Horizontal center
    let textY = height / 2 - 100;  // Positioning the text a bit above

    textAlign(LEFT, TOP);  // Center horizontally, start from top vertically

    text(`The loss of my Mushum has been a poignant journey. I miss the gentle but firm timbre of his voice. Yet, I find solace in knowing that he shared with our family what he held dear. His stories of the night sky will forever shape my perspective, nurturing a profound appreciation for his knowledge. When I gaze up into the wintry night sky and catch a glimpse of those distant clusters, I am comforted in the belief that his spirit resides there, reunited with the family he yearned for. He visits me in dreams, and in those moments, we converse fluently in Nakota (Assiniboine), a language beyond reach in this earthly realm.
    
"We are not human beings having a spiritual experience. We are spiritual beings having a human experience".`, textX, textY, textWidth);
    pop();
}

function mouseClicked() {
    if (state === `title`) {
        state = `pleiades`;
        loop(); // resume draw loop from Title(); - stopped so background wasn't constantly changing 
    }

    else if (state === `pleiades`) {
        for (let i = 0; i < stars.length; i++) {
            if (stars[i].isClicked()) {  // Check if the star was clicked
                state = `writeUp`;
                fade = undefined;
                noLoop();
                break;  // Break the loop once a star is clicked
            }
        }
    }

    // If the pleiades state has been visted bring them to the state with all clusters surrounding Pleiades
    else if (state === 'writeUp') {
        state = 'allClusters';
        loop();
        heartbeat.loop();

        if (!heartbeat.isPlaying()) {
            heartbeat.loop();
        }

        if (!allClustersTimer) {
            allClustersTimer = setTimeout(function () {
                state = 'theEnd';
                theEndReached = true;
                allClustersTimer = null;
            }, 20000); // 20sec
        }
    }

    if (state === 'theEnd') {
        state = 'title';
        titleInitialized = false;

        if (heartbeat.isPlaying()) {
            heartbeat.stop(); // stops the heart beat before heading back to title
        }
    }

}