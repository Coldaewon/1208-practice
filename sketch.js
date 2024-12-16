let particleSystem;

function setup() {
  createCanvas(600, 600);
  particleSystem = new ParticleSystem(width / 2, height / 2, 50); 
}

function draw() {
  background(0);
  particleSystem.run();
}

function mousePressed() {
  for(let i = 0; i < 10; i++){
    particleSystem.addParticle(mouseX, mouseY);
  }
}
