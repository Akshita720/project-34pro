
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

var girl1,girl2,girl3,girl;
var heli,heli_img;
var medi_box,medi_box_img;
var food_box,food_box_img;
var clothes_box,clothes_box_img;
var bg_song,cut_sound,sad_sound;
var bg_img,cut;
var rope1,rope2,rope3;
var add1,add2,add3;


function preload(){
  girl1 = loadImage("girl.PNG")
  girl2 = loadImage("girl2.PNG")
  girl3 = loadImage("girl3.PNG")
  medi_box_img = loadImage("medicine_box.jpg")
  food_box_img = loadImage("food_box.png")
  bg_img = loadImage("background.jpg")
  clothes_box_img = loadImage("clothes.png")
  bk_song = loadSound('sound1.mp3')
  sad_sound = loadSound("sad.wav")
  cut_sound = loadSound('rope_cut.mp3')

  //heli_img = loadAnimation("heli1.PNG","heli2.PNG","heli3.PNG","heli4.PNG");
}


function setup() {
  createCanvas(1500,920);

  engine = Engine.create();
  world = engine.world;
  
  //heli=createSprite(750,460,50,50);
  //heli.scale = 0.4
  girl= Bodies.rectangle(650,600,100,100)
  medi_box = Bodies.rectangle(600,200,70,70)
  food_box = Bodies.rectangle(650,200,70,70)
  clothes_box = Bodies.rectangle(700,200,70,70)
  rope1 = new Rope(6,{x:600,y:8})
  rope2 = new Rope(6,{x:650,y:8})
  rope3 = new Rope(6,{x:700,y:8})
  Matter.Composite.add(rope1.body,medi_box);
  Matter.Composite.add(rope2.body,food_box);
  Matter.Composite.add(rope3.body,clothes_box);
  add1 = new Link(rope1,medi_box)
  add2 = new Link(rope2,food_box)
  add3 = new Link(rope3,clothes_box)
  button1 = createImg('cut_btn.png');
  button1.position(590,8);
  button1.size(50,50);
  button1.mouseClicked(drop);

  button2 = createImg('cut_btn.png');
  button2.position(640,8);
  button2.size(50,50);
  button2.mouseClicked(drop2);

  button3 = createImg('cut_btn.png');
  button3.position(690,8);
  button3.size(50,50);
  button3.mouseClicked(drop3);
} 


function draw() 
{
  background(51);
  image(bg_img,0,0,1500,920)
  image(medi_box_img,medi_box.position.x,medi_box.position.y,70,70)
  image(food_box_img,food_box.position.x,food_box.position.y,70,70)
  image(clothes_box_img,clothes_box.position.x,clothes_box.position.y,70,70)
  image(girl1,650,600,100,100)
  rope1.show()
  rope2.show()
  rope3.show()

  if(collide(girl,food_box)==true)
  {
    World.remove(engine.world,food_box);
  }
  if(collide(girl,medi_box)==true)
  {
    World.remove(engine.world,food_box);
  }
  if(collide(girl,clothes_box)==true)
  {
    World.remove(engine.world,food_box);
  }
 //drawSprites();
  Engine.update(engine);
  
}

function drop()
{
  rope1.break();
  add1.dettach();
  add1 = null; 
}
function drop2()
{
  rope2.break();
  add2.dettach();
  add2 = null; 
}
function drop3()
{
  rope3.break();
  add3.dettach();
  add3 = null; 
}
function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}

function collide(body,sprite,x)
{
  if(body!=null)
  {
    var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y)
    if(d<=x)
    {
      return true
    }
    else
    {
      return false
    }
  }
}