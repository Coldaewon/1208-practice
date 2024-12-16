let particleSystem;

function setup() {
  createCanvas(600, 600);
  particleSystem = new ParticleSystem(width / 2, height / 2); // 중심원 생성
}

function draw() {
  background(0);
  particleSystem.run(); // 중심원 및 파티클 관리
}

function mousePressed() {
  particleSystem.addParticle(mouseX, mouseY); // 클릭 시 파티클 추가
}




 