class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:10
             
            
        }
        this.sling = Constraint.create(options);
        this.pointB= pointB
        World.add(world, this.sling);
    }
    attach(body1) {
        this.sling.bodyA = body1;
    }
    display(){
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }

    fly() {
    this.sling.bodyA= null;

    }
    
}