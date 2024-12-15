let particles = [];
let center;

function setup() {
  createCanvas(600, 600);
  center = createVector(width / 2, height / 2);
}

function draw() {
  background(0);

  fill(255, 204, 0);
  noStroke();
  ellipse(center.x, center.y, 20);

  
  for (let p of particles) {
    p.applyGravity(center); 
    p.applyRepulsion(center);
    p.update();
    p.display();
  }
}


function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

class ParticleSystem{
  constructor(x,y){
    this.center = createVector(x, y);
    this.particles[];

  }

  addParticle(x, y){
  this.particles.push(new Particle(x, y));
  }

  run(){
  fill(255, 204, 0);
  noStroke();
  ellipse(this.center.x, this.center.y, 20);
  }

  for(let p of this.particles){
    p.applyGravity(this.center);
    p.applyRepulsion(this.center);
    p.update();
    p.display();
  }
}
