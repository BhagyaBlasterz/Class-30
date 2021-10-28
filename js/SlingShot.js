class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 200
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;

        World.add(world, this.sling);
        //b = this.loadImage("./rope.png")
        
    }
    fly(){
        this.sling.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(8);
        stroke("green");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}
