/**
 * dodge-em
 * Taylor McArthur
 * 
 * Exercise, dodge em 
 */

"use strict";
let starImage;

//Object variable aka "circle"
let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0, //moves with mouse
    vy: 0, //moves with mouse
    speed: 5,
    fill:{
        r: 255,
        g: 0,
        b: 0
    }
};

// let player = {
//     x: 250,
//     y: 250,
//     size: 100,
//     fill: 255
// };

let numStatic = 100;

/**
 * Description of preload
*/
function preload() {
    starImage = loadImage("assets/images/star.png")

}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    covid19.y = random(0,height);
    covid19.vx = covid19.speed;
}

/**
 * Description of draw()
*/
function draw() {
    background(20);

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

    Image(starImage,mouseX,mouseY);

    //Mouse POS greater than covid19 x pos, move to right
    if(mouseX > covid19.x){
        //covid19 velocity X positive num, move to right
        covid19.vx = 1;
    }

    //Or if mouse POS X is less than covid19 X pos, move to left
    else if (mouseX < covid19.x){
        //set velocity of covid 19 to neg num, move left 
        covid19.vx = -1;
    }

    //Mouse POS greater than covid19 y pos, move below 
    if (mouseY > covid19.y){
        //set velocity of covid19 x to positive num, move down
        covid19.vy = 1;
    }

    //Mouse POS less than covid 19 y pos, move above
    else if (mouseY <covid19.y){
        //set velocity of covid19 to negative num, move up
        covid19.vy = -1;
    }

    //Apply the changes to vx and vy to covid 19 position
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    //player movement
    starImage.x = mouseX;
    starImage.y = mouseY;

    //check for catching covid
    let d = dist(starImage.x,starImage.y,covid19.x,covid19.y);
    if (d < covid19.size/2 + starImage.size/2){
        noLoop();
    }

    //display covid19
    fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
    ellipse(covid19.x,covid19.y,covid19.size);

    //display player
    fill(starImage.fill);
    ellipse(starImage.x,starImage.y,starImage.size);
}
