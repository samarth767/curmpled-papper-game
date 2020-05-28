class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
        this.image = loadImage("sprites/1234p.jpg");
  }
   display(){
         super.display();
   }
};
