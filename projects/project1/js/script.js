/**
 * Lost
 * Taylor McArthur
 * 
 * Visiting moons of Jupiter simulation
 * Title, yes
 * Simulation, started 
 * Ending, not done yet
 * Simulation begins when triggered by keyPressed
 */

"use strict";

//Spaceship, remember to 'draw' fill
let spaceship = {
    x: 300,
    y: 100,
    startX :300,
    startY: 100,
    vx: 0,
    vy: 0,
    size: 20,
    speed: 5,
    fill: {
        r:255,
        g: 0,
        b: 0,
        a: 1
    } 
};

//Planets, is there a better way for me to write these out for cleaner code?
let jupiter = {
    x: 450,
    y: 300,
    size: 250,
    fill: {
        r: 216,
        g: 202,
        b: 157
    }
};

let callisto = {
    x: 650,
    y: 500,
    size: 120,
    fill: {
        r: 160,
        g: 189,
        b: 183
    }
};

let ganymede = {
    x: 170,
    y: 140,
    size: 110,
    fill: {
        r: 139,
        g: 125,
        b: 130
    }
};

let europa = {
    x: 610,
    y: 190,
    size: 90,
    fill: {
        r: 0,
        g: 56,
        b: 103
    }
};

let io = {
    x: 250,
    y: 300,
    size: 80,
    fill: {
        r: 179,
        g: 196,
        b: 228
    }
};

let state = `title`; // The landing or loading page 


//Description of preload
function preload() {
}

//Description of setup
function setup() {
    createCanvas(800,600);
}

//Description of draw
function draw() {
    background(0);
    // noCursor();
    noStroke();

    //textFont('font will go here);

    if (state === `title`){
        title();
    }

    else if (state === `simulation`){
        simulation();
    }

    else if (state === `planetJupiter`){
        planetJupiter();
    }

    else if (state === `moonCallisto`){
        moonCallisto();
    }

    else if (state === `moonGanymede`){
        moonGanymede();
    }

    else if (state === `moonEuropa`){
        moonEuropa();
    }

    else if (state === `moonIo`){
        moonIo();
    }

    //Horizontal Movement 
    //Left arrow being pressed
    if (keyIsDown(LEFT_ARROW)){
        //If yes, set x velocity to be negative
        spaceship.vx = -spaceship.speed;
    }
    //Right arrow being pressed?
    else if (keyIsDown(RIGHT_ARROW)) {
        //If yes, set the x velocity to be positive
        spaceship.vx = spaceship.speed;
    }
    //If neither keys are pressed
    else{
        //Velocity x set to 0 to stop moving horizontially
        spaceship.vx = 0;
    }
    //Vertical movement 
    if (keyIsDown(UP_ARROW)){
        spaceship.vy = -spaceship.speed;
    }
    else if(keyIsDown(DOWN_ARROW)){
        spaceship.vy = spaceship.speed;
    }
    else {
        spaceship.vy = 0;
    }
    //Am I writing this in the wrong spot or displaying the circle in the wrong spot?!
    spaceship.x += spaceship.vx;
    spaceship.y += spaceship.vy;
}

function title(){
    push();
    textSize(30);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`Explore the moons of Jupiter`, width/2,height/2)
    pop();
    drawStarrySky();
}

function simulation(){
    drawStarrySky();
    checkOverlap();
    display();
    ourShip();
    // trailLine();
}

function planetJupiter(){
    push();
    textSize(40);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`Jupiter`, 100, 450);
    //Shows spaceship in this state
    ourShip();
    pop();
    checkOffScreen();
}

function moonCallisto(){
    push();
    textSize(40);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`Callistio`, 100, 450);
    //Shows spaceship in this state
    ourShip();
    pop();
    checkOffScreen();
}

function moonGanymede(){
    push();
    textSize(40);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`Ganymede`, 100, 450);
    //Shows spaceship in this state
    ourShip();
    pop();
    checkOffScreen();
}

function moonEuropa(){
    push();
    textSize(40);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`Europa`, 100, 450);
    //Shows spaceship in this state
    ourShip();
    pop();
    checkOffScreen();
}

function moonIo(){
    push();
    textSize(40);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`Io`, 100, 450);
    //Shows spaceship in this state
    ourShip();
    pop();
    checkOffScreen();
}

function drawStarrySky(){
    fill(255); //white colour
    for (let i = 0; i <100; i++){
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 2, 2)//draw the stars 
    }
}

function checkOffScreen(){
    if(isOffScreen(spaceship)){
        //go to
        state = `title`;
    }
}

function isOffScreen(spaceship){
    if (spaceship.x < 0 || spaceship.x > width || spaceship.y < 0 || spaceship.y > height){
        return true;
    }

    else{
        return false;
    }
}

//Check overlap for Jupiter, if yes go to new state information about planet 
function checkOverlap(){
    let d1 = dist(spaceship.x,spaceship.y,jupiter.x,jupiter.y);
    let d2 = dist(spaceship.x,spaceship.y,callisto.x, callisto.y)
    let d3 = dist(spaceship.x,spaceship.y,ganymede.x,ganymede.y)
    let d4 = dist(spaceship.x,spaceship.y,europa.x,europa.y)
    let d5 = dist(spaceship.x,spaceship.y,io.x,io.y)

    if (d1 <spaceship.size/2 + jupiter.size/2){
        state = `planetJupiter`;
    }

    else if(d2 <spaceship.size/2 + callisto.size/2){
        state = `moonCallisto`;
    }

    else if(d3 <spaceship.size/2 + ganymede.size/2){
        state = `moonGanymede`;
    }

    else if(d4 <spaceship.size/2 + europa.size/2){
        state = `moonEuropa`;
    }

    else if (d5 <spaceship.size/2 + io.size/2){
        state = `moonIo`;
    }    
}

function display(){
//Display Jupiter/planets/moons etc.
fill(jupiter.fill.r, jupiter.fill.g, jupiter.fill.b);
ellipse(jupiter.x,jupiter.y,jupiter.size,jupiter.size);

//Moons of Jupiter: Callisto
fill(callisto.fill.r, callisto.fill.g, callisto.fill.b);
ellipse(callisto.x, callisto.y, callisto.size, callisto.size);

// Ganymede
fill(ganymede.fill.r, ganymede.fill.g, ganymede.fill.b);
ellipse(ganymede.x, ganymede.y, ganymede.size, ganymede.size);

//Europa 
fill(europa.fill.r, europa.fill.g, europa.fill.b);
ellipse(europa.x, europa.y, europa.size, europa.size);

//Io
fill(io.fill.r, io.fill.g, io.fill.b);
ellipse(io.x, io.y, io.size, io.size);

//--------------------------------------
}

//Draw our spaceship here 
function ourShip(){
    //Spaceship drawn here 
    fill(spaceship.fill.r,spaceship.fill.g,spaceship.fill.b);
    ellipse(spaceship.x, spaceship.y, spaceship.size);
    // trailLine();
}

//Begins simulation
function keyPressed(){
    if (state ===  `title`){
        //Reset the location once cursor/spaceship is off screen 
        spaceship.x = spaceship.startX;
        spaceship.y = spaceship.startY;
        
        state = `simulation`;
    }
}

// //Trail, comet effect on SpaceShip
// function trailLine(){
//     push();
//     spaceship.x +1;
//     fill(spaceship.fill.r,spaceship.fill.g,spaceship.fill.b);
//     ellipse(spaceship.x,spaceship.y,spaceship.size);
//     createDotTrail(spaceship.x);
//     pop();
// }

// //Draw trail line with opacity 
// function createDotTrail(posX){
//     let trail = 30;
//     let opacity = 255;

//     for (let currentDot =0; currentDot <trail; currentDot++){
//         push();
//         posX -=3;
//         opacity -= 10

//         let trailColor = color(spaceship.fill.r,spaceship.fill.g,spaceship.fill.b);
//         trailColor.setAlpha(opacity);
//         fill(trailColor);

//         ellipse(posX,spaceship.y,spaceship.size);
//         pop();
//     }
// }
