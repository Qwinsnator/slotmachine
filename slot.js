class Slot {
    x;
    y;
    nummer;

    constructor(newX, newY, _nummer) {
        this.x = newX;
        this.y = newY;
        this.nummer = _nummer;
    }


    show() {
        rect(this.x, this.y, 100, 150);
        textSize(20);
        text(this.nummer, this.x-5, this.y+5);





    }


}