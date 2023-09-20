/**
 * i-like-to-move-it
 * Taylor McArthur
 * 
 * Complete exercise to show all that we have learned over the past couple of weeks using variables
 */

"use strict";

//Setting up variables
let bg = {
    r: 31,
    g: 144,
    b: 255
};

let circle1 = {
    x: 55,
    y: 0,
    size: 100,
    growthRate: -0.25,
    speed: 2,
    alpha: 300
};

let circle2 = {
    x: 180,
    y: 0,
    size: 100,
    growthRate: -0.25,
    speed: 2,
    alpha: 300
};

let circle3 = {
    x: 315,
    y: 0,
    size: 100,
    growthRate: -0.25,
    speed: 2,
    alpha: 300
};

let circle4 = {
    x: 445,
    y: 0,
    size: 100,
    growthRate: -0.25,
    speed: 2,
    alpha: 300
};

//Description of preload
function preload() {
}

//Description of setup
function setup() {
    createCanvas(500,500);
    noStroke();
}

//Draw

// Description of draw()
function draw() {
    //Background
    background(bg.r,bg.g,bg.b);
    bg.g = bg.g +1;

    //rectangle background layer
    fill(135,206,235);
    rect(50, 50, 400, 400, 5);

    //first circle
    circle1.y = circle1.y + circle1.speed;
    circle1.y = constrain(circle1.y,0,445);

    circle1.size = circle1.size + circle1.growthRate;
    circle1.size = constrain(circle1.size,50,width);

    // odd number circle increase
    circle1.size = map (mouseY,height,0,50,60)

    fill(255,255,0); //can't figure out or remember how to change inside variables
    ellipse(circle1.x,circle1.y,circle1.size);

    //second circle
    circle2.y = circle2.y + circle2.speed;
    circle2.y = constrain(circle2.y,0,315);

    circle2.size = circle2.size + circle2.growthRate;
    circle2.size = constrain(circle2.size,50,width);

    fill(255,255,0);
    ellipse(circle2.x,circle2.y,circle2.size);

    //third circle
    circle3.y = circle3.y + circle3.speed;
    circle3.y = constrain(circle3.y,0,200);

    circle3.size = circle3.size + circle3.growthRate;
    circle3.size = constrain(circle3.size,50,width);

    // odd number circle increase
    circle3.size = map (mouseY,height,0,50,60)

    fill(255,255,0);
    ellipse(circle3.x,circle3.y,circle3.size);

    //fourth circle
    circle4.y = circle4.y + circle4.speed;
    circle4.y = constrain(circle4.y,0,55);

    circle4.size = circle4.size + circle4.growthRate;
    circle4.size = constrain(circle4.size,50,width);

    fill(255,255,0);
    ellipse(circle4.x,circle4.y,circle4.size);
}