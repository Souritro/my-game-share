
 const Engine= Matter.Engine;
 const Bodies= Matter.Bodies;
 const World= Matter.World;
 const Events = Matter.Events;
 var ball, ground, obstacle;
 var groundimage;
 var ball2;
 var engine,world;
 var canvas;
 var ballanimation;
 var backgroundimg
 var npc;
 var previous=0,current;
 var canvas;
 var life=4
 var obstaclepart1,obstaclepart2,obstaclepart3,obstaclepart4,obstaclepart5,obstaclepart6
 var npcarray=[];
 var helper1;
 var gamestate;
 
  function preload(){
    ballanimation= loadAnimation("transparentball.png","finalsmallsmile.png")
    backgroundimg= loadImage("bg.png")
    groundimage= loadImage("greenground.png")

  }

 function setup(){
   // fill(rgb(0,0,0))
   canvas=createCanvas(displayWidth,displayHeight)
    gamestate="PLAY"
    engine= Engine.create()
    world= engine.world;
    ground= new Ground(displayWidth/2,1080,displayWidth*100,20)
    obstaclepart1= new Ground(1525,930,20,280)
    obstaclepart2= new Ground(1970,800,900,20)
    obstaclepart3= new Ground(2425,930,20,280)
    obstaclepart4= new Ground(2825,930,20,280)
    obstaclepart5= new Ground(3270,800,900,20)
    obstaclepart6= new Ground(3725,930,20,280)
    
  
   // ground= createSprite(300,596,3200,20)
    //ground.debug=true;
    //ground.setCollider("rectangle",0,0,3200,20)
 
    ball= new Ball(200,ground.body.position.x-6,31,30)
    Events.on(engine, "collisionStart", collision);
    //ball2= new Ball(260,800-6,100,100)
    ballsprite= createSprite(800,300,ball.width,ball.height)
    ballsprite.addAnimation("ballanimation1",ballanimation)
    ballsprite.scale="1.4"
    groundsprite= createSprite(800,300,ground.width,ground.height)
    groundsprite.addImage("greenground",groundimage)
    helper1= new Helper(1320,1030,90,90)
    
    //Body.rotate( ball, Math.PI/6);
    //npc= new Nonplayer(1000,displayHeight-6,40,60)


    //previous = millis()
   
 }

 function draw(){
  


   background("yellow")
   //image(backgroundimg,0,0,displayWidth,displayHeight)
    Engine.update(engine)
    ground.display();
    obstaclepart1.display()
    obstaclepart2.display()
    obstaclepart3.display()
    obstaclepart4.display()
    obstaclepart5.display()
    obstaclepart6.display()
    ball.display()
   // ball2.display()
   /*if(frameCount%20===0){
    for(i=0;i<npcarray.length;i++){
      npc=new Nonplayer(random(400,displayWidth*100),ground.body.position.x-6,30,30)
      npcarray.push(npc)
      npcarray[i].display()
      console.log("npc is alive")
    }
   }*/
   //collision()
   
    //npc.display()
    helper1.display()
    
    console.log(displayHeight, displayWidth)
   
    current = millis();
    //console.log(npc.body.speed)
   
    ballsprite.x=ball.body.position.x;
    ballsprite.y=ball.body.position.y;
    groundsprite.x=ground.body.position.x;
    groundsprite.y=ground.body.position.y
    
    //camera.position.x=displayWidth/2
  camera.position.x=ballsprite.x

   //camera.position.y=ballsprite.y;
    console.log(ball.body.position.x)
    console.log(life)
    //isColliding()
    //Collision()
    //isTouching()
  drawSprites()
 }
 function keyPressed(){
    if(keyCode===32 && ball.body.position.y>1001){ //Space
      ball.upForce()
      ball.downForce()
      previous = current;
      //console.log("previous = current")
    }
    else{console.log("pressed multiple times")}
    if(keyCode === 65){
      ball.leftForce()
    }
    if(keyCode === 68){
      ball.rightForce()
    }


   
  }

//function isTouching(){

//  if(ball.x-npc.x<ball.radius+npc.radius){
 //  World.remove(world,npc.body)
  //  life-=1;

  //}
//}
/*function Collision(){
for(a=0;a<npcarray.length;a++){
  var collision=Matter.SAT.collides(ball.body,obstaclepart1.body)
  if(collision.collides){
    console.log("Workedyay!")
  }
}
}*/
function collision(event) {
  var pairs = event.pairs;

    var labelA = ball.body.label
    var labelB = helper1.body.label
    if (labelB == "helper" && labelA == "ball") {
      helper1.destroy()

      /*if (labelA == "dots" && labelB == "particle") {
        balls[i].destroy();
        //colliding
      }*/
  }
}
//function isColliding(){
  //Matter.Detector.canCollide(ball,npc)
//}


