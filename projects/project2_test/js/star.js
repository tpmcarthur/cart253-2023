//Creating star object

class Star {
    // Constructor to create a new star object
    constructor(posX, posY, size) {
        this.x = posX; // X pos
        this.y = posY; // Y pos
        this.size = size; //Size
        this.fill = {
            h: 176,
            s: 100,
            b: 80,
            a: 99
        }

        // display stars
        this.display();
    }

    // calculate distance between mouse position and star position 
    isClicked() {
        let d = dist(mouseX, mouseY, this.x, this.y);//Distamce from mouse to star
        return (d < this.size / 2); //Returns true IF mouse is within radius
    }

    //displays the the stars with a emissive material, audio reactive (amplitude)
    display() {
        let level = amplitude.getLevel(); // current amp level
        let newSize = map(level, 0, 1, this.size * 0.8, this.size * 2); //calculate size based off amplitutde

        noStroke();
        fill(this.fill.h, this.fill.s, this.fill.b, this.fill.a);

        drawingContext.shadowBlur = 15; //Blur amount 
        drawingContext.shadowColor = color(207, 100, 100); //blur color

        //Blur effect for glow around each star, multiple times in a for loop 
        for (let i = 0; i < 5; i++) {
            ellipse(this.x, this.y, newSize, newSize);
        }
    }
    // any methods of responding to this specfic event should be in here like mousePressed or mouseClicked. p5 events
}