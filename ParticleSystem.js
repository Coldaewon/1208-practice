class ParticleSystem {
    constructor(x, y) {
      this.center = createVector(x, y);
      this.particles = []; 
    }
  
    addParticle(x, y) {
      this.particles.push(new Particle(x, y)); 
    }
  
    run() {
      
      fill(255, 204, 0);
      noStroke();
      ellipse(this.center.x, this.center.y, 20);
  
     
      for (let p of this.particles) {
        p.applyGravity(this.center); 
        p.applyRepulsion(this.center);
        p.update(); 
        p.display();
      }
    }
  }