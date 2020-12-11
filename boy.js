class Boy{
    constructor(x, y, width, height) {
        var optionss = {
            'restitution':0.8,
            'friction':1.0

        }
        this.body = Bodies.rectangle(x, y, width, height, optionss);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/boy.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 300,300, this.width, this.height);
        pop();
      }
}