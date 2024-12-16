class ParticleSystem {
    constructor(x, y, radius) {
      this.center = createVector(x, y);
      this.radius = radius;
      this.particles = []; 
    }
  
    addParticle(x, y) {
      this.particles.push(new Particle(x, y)); 
    }
  
    run() {
      
      fill(255, 204, 0);
      noStroke();
      ellipse(this.center.x, this.center.y, this.radius * 2);
  
     
      for (let p of this.particles) {
        p.applyGravity(this.center, this.radius); 
        p.applyRepulsion(this.center, this.radius);
        p.update(); 
        p.display();
      }
    }
  }