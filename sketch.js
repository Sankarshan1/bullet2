var bullet,wall,ground,speed,weight,thickness;




function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,380,thickness,height/2);
  wall.shapeColour= (80,80,80);
  
  bullet=createSprite(200,380,20,20);
  bullet.shapeColour= "white";
   ground=createSprite(400,380,800,20);
   speed=random(55,190)
   weight=random(400,1500)
   thickness=random(22,83)
   
  
}

function draw() {
  background(0,0,0);  
  bullet.collide(wall);
  

  ground.visible=false;


  bullet.velocityX=speed;


  if(wall.x-bullet.x<(bullet.width+wall.width/2)){

   bullet.velocityX=0;
   var deformation=0.5*width*speed*speed/22509;

   if(deformation<10){
     bullet.shapeColour=colour(225,0,0)
   }

   if(deformation>10){
     bullet.shapeColour=colour(0,255,0)
   }

   






  }
  drawSprites();
  }

