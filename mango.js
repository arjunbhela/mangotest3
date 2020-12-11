

    class Mango{
        constructor(x, y, r) {
            var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0,
                'isStatic':true
            }
            this.body = Bodies.circle(x, y, r, options);
            this.r = r
            this.image = loadImage("Plucking mangoes/mango.png");
            World.add(world, this.body);
          }
          display(){
            push();
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            imageMode(CENTER);
            image(this.image,0,0,this.r,this.r);
            pop();
          }
    }