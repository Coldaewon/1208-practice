function setup() {
  createCanvas(600, 600);
  center = createVector(width / 2, height /2);
}

function draw() {
  background(220);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
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

  applyGravity(target) {
    let dir = p5.Vector.sub(target, this.pos);
    let distance = constrain(dir.mag(), 10, 200);
    let strength = 10 / (distance * distance);
    dir.setMag(strength);
    this.applyForce(dir);
  }

  applyRepulsion(target) {
    let dir = p5.Vector.sub(this.pos, target);
    let distance = dir.mag();
    if (distance < 50) {
      let strength = 100 / (distance * distance);
      dir.setMag(strength);
      this.applyForce(dir);
    }
  }

  startOrbit(target) {
    this.isOrbiting = true;
    let dir = p5.Vector.sub(this.pos, target);
    let tangent = dir.copy().rotate(HALF_PI);
    tangent.setMag(sqrt(10 / dir.mag()));
    this.vel = tangent;
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
