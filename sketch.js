//Create variables here
var canvas;
var database;
var dog,dogimg,happydogimg;
var food,foodS,foodstock,foodobj;
var lastfed,fedtime,feedtime;
var button1,button2,button3,input,callName;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;
var i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20;
var sound1;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");

  i1 = loadImage("images/MIlk.png");
  i2 = loadImage("images/MIlk.png");
  i3 = loadImage("images/MIlk.png");
  i4 = loadImage("images/MIlk.png");
  i5 = loadImage("images/MIlk.png");
  i6 = loadImage("images/MIlk.png");
  i7 = loadImage("images/MIlk.png");
  i8 = loadImage("images/MIlk.png");
  i9 = loadImage("images/MIlk.png");
  i10 = loadImage("images/MIlk.png");
  i11 = loadImage("images/MIlk.png");
  i12 = loadImage("images/MIlk.png");
  i13 = loadImage("images/MIlk.png");
  i14 = loadImage("images/MIlk.png");
  i15 = loadImage("images/MIlk.png");
  i16 = loadImage("images/MIlk.png");
  i17 = loadImage("images/MIlk.png");
  i18 = loadImage("images/MIlk.png");
  i19 = loadImage("images/MIlk.png");
  i20 = loadImage("images/MIlk.png");
  
}

function setup() {
  canvas = createCanvas(1500,500)

  database = firebase.database();

  foodobj = new Food();
  foodobj.getFood();

  button1 = createButton('Feed the Pet');
  button1.position(1150,60);
  button1.mousePressed(feedDog)

  button2 = createButton('Add the food');
  button2.position(1250,60);
  button2.mousePressed(addFood);

  button3 = createButton('Name your pet');
  button3.position(480,60);
  button3.mousePressed(namePet);

  input = createInput('');
  input.position(600,60);

  food = 20;

  dog = createSprite(950,250);
  dog.addImage(dogimg);
  dog.scale = 0.15;

  a = createSprite(200,200);
  a.addImage(i1);
  a.scale = 0.1;

  b = createSprite(250,200);
  b.addImage(i1);
  b.scale = 0.1;

  c = createSprite(300,200);
  c.addImage(i1);
  c.scale = 0.1;

  d = createSprite(350,200);
  d.addImage(i1);
  d.scale = 0.1;

  e = createSprite(400,200);
  e.addImage(i1);
  e.scale = 0.1;

  f = createSprite(450,200);
  f.addImage(i1);
  f.scale = 0.1;

  g = createSprite(500,200);
  g.addImage(i1);
  g.scale = 0.1;

  h = createSprite(550,200);
  h.addImage(i1);
  h.scale = 0.1;

  i = createSprite(600,200);
  i.addImage(i1);
  i.scale = 0.1;

  j = createSprite(650,200);
  j.addImage(i1);
  j.scale = 0.1;

  k = createSprite(200,300);
  k.addImage(i1);
  k.scale = 0.1;

  l = createSprite(250,300);
  l.addImage(i1);
  l.scale = 0.1;

  m = createSprite(300,300);
  m.addImage(i1);
  m.scale = 0.1;

  n = createSprite(350,300);
  n.addImage(i1);
  n.scale = 0.1;

  o = createSprite(400,300);
  o.addImage(i1);
  o.scale = 0.1;

  p = createSprite(450,300);
  p.addImage(i1);
  p.scale = 0.1;

  q = createSprite(500,300);
  q.addImage(i1);
  q.scale = 0.1;

  r = createSprite(550,300);
  r.addImage(i1);
  r.scale = 0.1;

  s = createSprite(600,300);
  s.addImage(i1);
  s.scale = 0.1;

  t = createSprite(650,300);
  t.addImage(i1);
  t.scale = 0.1;

  }


function draw() {  

  background(46,139,87);

  foodobj.display();

  if(button1.mousePressed(feedDog)&&food === 19&&dog.position.x === 700){
    t.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 18&&dog.position.x === 700){
    s.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 17&&dog.position.x === 700){
    r.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 16&&dog.position.x === 700){
    q.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 15&&dog.position.x === 700){
    p.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 14&&dog.position.x === 700){
    o.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 13&&dog.position.x === 700){
    n.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 12&&dog.position.x === 700){
    m.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 11&&dog.position.x === 700){
    l.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 10&&dog.position.x === 700){
    k.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 9&&dog.position.x === 700){
    j.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 8&&dog.position.x === 700){
    i.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 7&&dog.position.x === 700){
    h.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 6&&dog.position.x === 700){
    g.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 5&&dog.position.x === 700){
    f.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 4&&dog.position.x === 700){
    e.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 3&&dog.position.x === 700){
    d.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 2&&dog.position.x === 700){
    c.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 1&&dog.position.x === 700){
    b.visible = false;
  }
  if(button1.mousePressed(feedDog)&&food === 0&&dog.position.x === 700){
    a.visible = false;
  }

  if(button2.mousePressed(addFood)&&food === 1 ){
    a.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 2 ){
    b.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 3 ){
    c.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 4 ){
    d.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 5 ){
    e.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 6 ){
    f.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 7 ){
    g.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 8 ){
    h.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 9 ){
    i.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 10 ){
    j.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 11 ){
    k.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 12 ){
    l.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 13 ){
    m.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 14 ){
    n.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 15 ){
    o.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 16 ){
    p.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 17 ){
    q.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 18 ){
    r.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 19 ){
    s.visible = true;
  }
  if(button2.mousePressed(addFood)&&food === 20 ){
    t.visible = true;
  }
  if(food < 20){
    t.visible = false;
  }
  if(food < 19){
    s.visible = false;
  }
  if(food < 18){
    r.visible = false;
  }
  if(food < 17){
    q.visible = false;
  }
  if(food < 16){
    p.visible = false;
  }
  if(food < 15){
    o.visible = false;
  }
  if(food < 14){
    n.visible = false;
  }
  if(food < 13){
    m.visible = false;
  }
  if(food < 12){
    l.visible = false;
  }
  if(food < 11){
    k.visible = false;
  }
  if(food < 10){
    j.visible = false;
  }
  if(food < 9){
    i.visible = false;
  }
  if(food < 8){
    h.visible = false;
  }
  if(food < 7){
    g.visible = false;
  }
  if(food < 6){
    f.visible = false;
  }
  if(food < 5){
    e.visible = false;
  }
  if(food < 4){
    d.visible = false;
  }
  if(food < 3){
    c.visible = false;
  }
  if(food < 2){
    b.visible = false;
  }
  if(food < 1){
    a.visible = false;
  }
  
  dog.velocityY = dog.velocityY + 0.25;
  if(dog.position.y === 250){
    dog.velocityY = 0;
  }
  
  fedtime = database.ref('feedtime');
  fedtime.on("value",function(data){
    lastfed = data.val();
  });

  if(lastfed>=12){
    fill("black");
    text("Last feed : "+ lastfed % 12 + "PM",650,20);
  }
  else if(lastfed === 12){
    fill("black");
    text("Last feed : 12AM",650,20);
  }
  else{
    fill("black");
    text("Last feed : " + lastfed + "AM", 650,20 )
  }

  drawSprites();

  //add styles here
  fill("red");
  textSize(30);
  text("Food : " + food,875,150);

}

function feedDog(){

  dog.addImage(happydogimg);
  foodobj.deductFood(food);

  if(dog.y === 250 ){

    dog.velocityY = -5;
    
  }
  feedtime = hour();

}
function addFood(x){

  if(food < 20){
      food = food+1;    
  }
  database.ref('/').update({
      food 
  });
}

function namePet(){

  input.hide();
  button3.hide();

  callName = createElement('h1');
  callName.position(800,60);
  callName.html('Hey '+ input.value())
 
}