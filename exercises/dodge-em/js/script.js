/**
 * dodge-em exercise
 * Taylor McArthur
 * 
 * Exercise, dodge em, black hole chasing a star
 */

"use strict";

//Object variable aka "circle"
let blackhole = {
    x: 0,
    y: 250,
    size: 500,
    // vx: 0, //moves with mouse
    // vy: 0, //moves with mouse
    speed: 5,
    fill: 255,
    image: undefined,
};

let player = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255,
    image: undefined,
};

let numStatic = 100;

/**
 * Description of preload
*/
function preload() {

}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    imageMode(CENTER);
    player.image = loadImage("assets/images/star.png")

    blackhole.image = loadImage("assets/images/blackhole.png")

    blackhole.y = random(0,height);
    blackhole.vx = blackhole.speed;

}

/**
 * Description of draw()
*/
function draw() {
    background(20);
    noCursor();

    //Static background
    push();
    for(let i = 0; i < numStatic; i++){
        let x = random(0,width);
        let y = random(0,height);
        stroke(255,204,0);
        strokeWeight(1.5);
        point(x,y);
    }
    pop();
    
    //Mouse POS greater than blackhole x pos, move to right
    if(mouseX > blackhole.x){
        //blackhole velocity X positive num, move to right
        blackhole.vx = 1;
    }

    //Or if mouse POS X is less than blackhole X pos, move to left
    else if (mouseX < blackhole.x){
        //set velocity of covid 19 to neg num, move left 
        blackhole.vx = -1;
    }

    //Covid 19 reaching right half of screen, size increases
    if(blackhole.x > width/2){
        blackhole.size = blackhole.size + 1;
    }

    // when going back to left side reduce size, stop at 100
    else if(blackhole.size = blackhole.size -1)
        blackhole.size = constrain(blackhole.size,500,width);

    //Mouse POS greater than blackhole y pos, move below 
    if (mouseY > blackhole.y){
        //set velocity of blackhole x to positive num, move down
        blackhole.vy = 1;
    }

    //Mouse POS less than blackhole y pos, move above
    else if (mouseY <blackhole.y){
        //set velocity of blackhole to negative num, move up
        blackhole.vy = -1;
    }

    //Apply the changes to vx and vy to blackhole position
    blackhole.x = blackhole.x + blackhole.vx;
    blackhole.y = blackhole.y + blackhole.vy;

    //player movement
    player.x = mouseX;
    player.y = mouseY;

    //check for blackhole
    let d = dist(player.x,player.y,blackhole.x,blackhole.y);
    if (d < blackhole.size/2 + player.size/2){
        noLoop();
    }

    //display blackhole
    fill(blackhole.fill);
    image(blackhole.image,blackhole.x,blackhole.y,blackhole.size,blackhole.size);
    rotate(blackhole.angle); // Apply rotation

    //display player
    fill(player.fill);
    image(player.image,player.x,player.y,player.size, player.size);
    
}
