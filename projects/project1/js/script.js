/**
 * Taylor McArthur
 * 
 * Visiting moons of Jupiter simulation
 * Simulation begins when triggered by keyPressed
 * visit eahc planet or moon to learn an educational fact
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
        r:0,
        g: 255,
        b: 255,
        a: 1
    } 
};

//Planets, has to be a better way to store this than writing it all out
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
    angle: 0,
    speed: 0.02,
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

let visitedPlanets = []; // keeping track of all the planets visited

let trailPositions = []; //Have the trail follow/move in the directions of the arrows

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
    noStroke();

    textFont('Alata');

    //Beginning of simulation state, title info
    if (state === `title`){
        title();
    }

    //the rest below are all different states when visiting the other moons or planets
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

    else if (state ===`ending`){
        ending();
    }

    //Movement/input being controlled by arrow keys instead of a mouse input
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
    //Text1
    textSize(30);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`Explore the moons of Jupiter`, width/2,height/2)

    //Text2
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`p r e s s  a n y   k e y   o r   a r r o w p a d   t o   b e g i n`, 400,350);
    pop();
    drawStarrySky();
}

function simulation(){
    drawStarrySky();
    checkOverlap();
    display();
    ourShip();
    trailLine();
}

function planetJupiter(){
    push();
    //text1
    textSize(40);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`Jupiter`, 145, 450);

    //text2
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`Great Red Spot and has been going on for 30yrs`, 300, 500);

    //Shows spaceship in this state
    ourShip();
    trailLine();
    pop();
    checkOffScreen();
}

function moonCallisto(){
    push();
    //text1
    textSize(40);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`Callistio`, 155, 450);

    //text2
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`the oldest and most cratered object in our solar system`, 330, 500);
   
    //Shows spaceship in this state
    ourShip();
    trailLine();
    pop();
    checkOffScreen();
}

function moonGanymede(){
    push();
    //Text 1
    textSize(40);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`Ganymede`, 180, 450);
    
    //Text2
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`the largest moon in our solar system, even larger than planet Mercury!`, 400, 500);
   
    //Shows spaceship in this state
    ourShip();
    trailLine();
    pop();
    checkOffScreen();
}

function moonEuropa(){
    push();
    //text1
    textSize(40);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`Europa`, 145, 450);

    //text2
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`believed to have a subsurface ocean beneath the icy crust`, 343, 500);

    //Shows spaceship in this state
    ourShip();
    trailLine();
    pop();
    checkOffScreen();
}

function moonIo(){
    push();
    //text1
    textSize(40);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`Io`, 95, 450);

    //text2
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`the most volcanically active body in our solar system`,320,500);

    //Shows spaceship in this state
    ourShip();
    trailLine();
    pop();
    checkOffScreen();
}

//Have stars in the background..again
function drawStarrySky(){
    fill(255); //white colour
    for (let i = 0; i <10; i++){
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 2, 2)//draw the stars 
    }
}

//Check to see if the spaceship has gone off the screen, if so return back to the title screen
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
    
    //Keeping check of all the planets/moons that have been visited for simulation to end
    if (d1 <spaceship.size /2 + jupiter.size/2 && !visitedPlanets.includes(`planetJupiter`)){
        state = `planetJupiter`;
        visitedPlanets.push(`planetJupiter`);
    }

    else if (d2 <spaceship.size /2 + callisto.size/2 && !visitedPlanets.includes(`moonCallisto`)){
        state = `moonCallisto`;
        visitedPlanets.push(`moonCallisto`);
    }

    else if (d3 <spaceship.size /2 + ganymede.size/2 && !visitedPlanets.includes(`moonGanymede`)){
        state = `moonGanymede`;
        visitedPlanets.push(moonGanymede);
    }

    else if (d4 <spaceship.size /2 + europa.size/2 && !visitedPlanets.includes(`moonEuropa`)){
        state = `moonEuropa`;
        visitedPlanets.push(moonEuropa);
    }

    else if (d5 <spaceship.size /2 + io.size/2 && !visitedPlanets.includes(`moonIo`)){
        state = `moonIo`;
        visitedPlanets.push(moonIo);
    }
    //Check if all the moons and or planets have been visited
    if(visitedPlanets.length === 5){
        state = `ending`;
    }
}

//The end of the simulation message
function ending(){
    background(0);
    textSize(30);
    fill(255, 255, 255);
    textAlign(CENTER, CENTER);
    text(`Wow! All planets and moons visited`, width / 2, height / 2); 
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

}

//Draw our spaceship here 
function ourShip(){
    //Spaceship drawn here 
    fill(spaceship.fill.r,spaceship.fill.g,spaceship.fill.b);
    ellipse(spaceship.x, spaceship.y, spaceship.size);

        // Display ellipses in the center for specific states
        if (state === `planetJupiter`){
            displayPlanet(jupiter);
        }   

        else if (state === `moonCallisto`){
            displayPlanet(callisto);
        }

        else if (state ===`moonGanymede`){
            displayPlanet(ganymede);
        }

        else if (state ===`moonEuropa`){
            displayPlanet(europa);
        }

        else if (state ===`moonIo`){
            displayPlanet(io);
        }
}

//Planets displayed in the centre of the screen, info
function displayPlanet(planet) {
    fill(planet.fill.r, planet.fill.g, planet.fill.b);
    ellipse(width / 2, height / 2, planet.size, planet.size);
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

//Trail, comet effect on SpaceShip
function trailLine(){
    push();

    //Make comet glow
    blendMode(ADD);

    //current position of trail?
    trailPositions.push({ x: spaceship.x, y: spaceship.y })

    for (let i = 0; i < trailPositions.length; i++){
        let alpha = map (i, 0, trailPositions.length, 255, 0);
        let size = map (i, 0, trailPositions.length, 1, spaceship.size);
        fill(spaceship.fill.r, spaceship.fill.g, spaceship.fill.b, alpha);
        
        //Blur for glow effect
        noStroke();
        for (let j = 0; j < 5; j++){
            ellipse(trailPositions[i].x, trailPositions[i].y, size + j * 2, size + j * 2);
        }
    }

    //limit the amount of the length of the tail
    if(trailPositions.length > 20){
        trailPositions.shift();
    }
    //Reset the Blend Mode
    blendMode(BLEND);
    pop();
}

//Draw trail line with opacity 
function createDotTrail(posX){
    let trail = 20;
    let opacity = 255;

    for (let currentDot =0; currentDot <trail; currentDot++){
        push();
        posX -= 3;
        opacity -= 10;

        let trailColor = color(spaceship.fill.r,spaceship.fill.g,spaceship.fill.b);
        trailColor.setAlpha(opacity);
        fill(trailColor);

        let size = map(currentDot, 0, trail, spaceship.size, 1);
        noStroke();
        for (let j = 0; j <5; j++){
            ellipse(posX, spaceship.y, size + j * 2, size + j *2);
        }
        pop();
    }
}
