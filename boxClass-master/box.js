class box {

constructor (x,y) {

this.body = Matter.Bodies.rectangle(x, y , 100, 100);

World.add(world,this.body)

}

display() {

    push();
    rectMode(CENTER)
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rect(0, 0, 100, 100); 
    pop()


}

}