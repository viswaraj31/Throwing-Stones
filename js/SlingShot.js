class SlingShot{
    constructor(body,point){
        var options={
            bodyA:body,
            pointB:point,
            length:10,
            stiffness:0.4
        }
        this.sling=Matter.Constraint.create(options)
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        stroke('#301608')
        push();
        strokeWeight(7);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        
    }
    }
}