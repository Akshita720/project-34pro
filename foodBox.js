class Food{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.foodImg = loadImage("food_box.png")
    }

    show() {
        let pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.foodImg,pos.x,pos.y, this.w, this.h);
        noFill()
        pop();
      }
}