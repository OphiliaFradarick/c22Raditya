class Box {
    //properties 
    constructor(){
        var options ={
            restitution : 0.08   
        }

        this.body = Bodies.rectangle(200,200,20,20,options);
        World.add(world,this.body);
    }

    //function
    display(){

        rectMode(CENTER);
        rect(200,200,20,20);
    }
}