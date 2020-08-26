class Helper{
    constructor(x,y,width,height){
        var options={
            friction:0.023
        }
        this.body= Bodies.rectangle(x,y,width,height)
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.body.label="helper"
        World.add(world,this.body)
        
    }
    display(){
        fill('brown');
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
    destroy(){
        if(this.body.speed===1){
            World.remove(world,this.body)
        }
    }
}