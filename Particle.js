class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(0, 0);
    this.isOrbiting = false;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  applyGravity(target, radius) {
    let dir = p5.Vector.sub(target, this.pos);
    let distance = constrain(dir.mag(), radius + 10, radius + 200);
    let strength = 10 / (distance * distance);
    dir.setMag(strength);
    this.applyForce(dir);
  }

  applyRepulsion(target,radius) {
    let dir = p5.Vector.sub(this.pos, target);
    let distance = dir.mag();
    if (distance < radius + 30) {
      let strength = 100 / (distance * distance);
      dir.setMag(strength);
      this.applyForce(dir);
    } else if (!this.isOrbiting && distance >= radius + 30) {
      this.startOrbit(target);
    }
  }
  startOrbit(target) {
    this.isOrbiting = true;
    let dir = p5.Vector.sub(this.pos, target);
    if (dir.mag() > 0.1) {
      let tangent = dir.copy().rotate(HALF_PI);
      tangent.setMag(sqrt(10 / dir.mag()));
      this.vel = tangent;
    }
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