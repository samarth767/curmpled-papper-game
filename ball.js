class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/123p.jpg");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  fill(255);
    super.display();
  }
}
