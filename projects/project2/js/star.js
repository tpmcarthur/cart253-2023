// The thist of creating the this objects

class Star {

    constructor() {
        this.x = 300;
        this.y = 300;
        this.size = 20;
        this.fill = {
            h: 176,
            s: 100,
            b: 80,
            a: 99
        }

        this.display();
    }

    //displays the this
    display() {
        fill(this.fill.h, this.fill.s, this.fill.b, this.fill.a);

        drawingContext.shadowBlur = 90;
        drawingContext.shadowColor = color(207, 100, 200);

        ellipse(this.x, this.y, this.size, this.size);
        ellipse(this.x, this.y, this.size, this.size);
        ellipse(this.x, this.y, this.size, this.size);
        ellipse(this.x, this.y, this.size, this.size);
    }





}