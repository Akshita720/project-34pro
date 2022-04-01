class Medi{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.mediImg = loadImage("medicine_box.jpg")
    }

    show() {
        let pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.mediImg,pos.x,pos.y, this.w, this.h);
        noFill()
        pop();
      }
}