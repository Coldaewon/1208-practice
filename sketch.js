function setup() {
  createCanvas(600, 600);
  center = createVector(width / 2, height /2);
}

function draw() {
  background(220);
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(0, 0);
  }
  
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 5);
  }
}
