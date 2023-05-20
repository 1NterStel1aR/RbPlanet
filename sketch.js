let d=0;
let dx=0;
let dy=0;
let s=0;
let r=0;
let dz=0;
let k=0;
function setup() {
  createCanvas(1600, 1600,WEBGL);
  rectMode(CENTER)
}
function preload(){
  Pic=loadImage('행성.png')
}
function draw() {
  if (r-s<200){
    s=s+1
    r=frameCount-s;
  }
  else{
    s-=100
  }
  if(dz>200){
    d++;
    dx+=0.6;
    dy+=0.6;
    dz+=0.6
  }
  else{
    if(d==10){
      dz+=2
      dy+=2
      dx+=2
      k=0
    }
    else{
      d=d-1
      dx-=0.5
      dy-=0.5
      dz-=0.5
    }
  }
  background(0);
  translate(0,0,0)
  rotateX(radians(d+dx))
  rotateY(radians(d+dy))
  rotateZ(radians(d+dz))
  rotateX(radians(d+dx))
  pointLight(0,0,255,0,-200,0)
  pointLight(0,255,0,200,200,0)
  pointLight(255,0,0,0,200,0)
  pointLight(255,0,0,-200,-200,0)
  pointLight(0,255,255,-200,0,0)
  pointLight(100,100,75,200,0)
  pointLight(100,90,30,0,0,-200)
  pointLight(100,30,90,0,0,200)
  pointLight(80,80,80,200,200,200)
  pointLight(70,63,64,-200,-200,-200)
  pointLight(30,30,50,0,0,0)
  if(d>175){
    stroke(d,d,d)
    dx-=1
    dy-=1
    dz-=1
    k=1
  }
  specularMaterial(255,255,255);
  strokeWeight(1)
  stroke(d,d,d)
  strokeWeight(0.2)
  rotateX(radians(dz))
  torus(170+r*3,10,99)
  rotateX(radians(-dz))
  strokeWeight(1)
  sphere(100+r)
  camera(800+r,800+r,800+r)
}