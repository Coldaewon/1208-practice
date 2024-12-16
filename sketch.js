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
  particleSystem.addParticle(mouseX, mouseY);
}
