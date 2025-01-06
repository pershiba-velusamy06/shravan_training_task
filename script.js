const hole = document.getElementById("hole");
const game = document.getElementById("game");
const start = document.getElementById("start");
const result = document.getElementById("result");
const text = document.getElementById("text");
const birdImage = document.getElementById("bird_image");

let score = 0;
let jumping = 0;

const canvasHeight = 667;
const holeHeight = 200;
const holeWidth = 50;
const birdHeight = 34;
const baseHeight = 112;

hole.addEventListener("animationiteration", onHoleAnimationEvent);

start.addEventListener("click", () => {
  game.style.display = "block";
  start.style.display = "none";
});

function onHoleAnimationEvent() {
  generateRandomHole();
}

function generateRandomHole() {
  score++;
  const holeBottom = Math.random() * (canvasHeight - baseHeight);
  const holeTop = -(holeBottom + holeHeight);
  hole.style.top = holeTop + "px";
}

const fall = setInterval(() => {
  const birdTop = parseInt(
    window.getComputedStyle(bird).getPropertyValue("top")
  );
  if (jumping === 0) {
    makeTheBirdFall(birdTop);
  }
  if (
    isTouchingCanvas(birdTop) ||
    (isTouchingVertically() && isTouchingHorizontally(birdTop))
  ) {
    displayResult();
  }
}, 10);

function makeTheBirdFall(birdTop) {
  bird.style.top = birdTop + 2 + "px";
  birdTop += 2;
}

function displayResult() {
  result.style.display = "block";
  text.innerHTML = "Your score: " + score;
  game.style.display = "none";
}

function isTouchingCanvas(birdTop) {
  return birdTop > canvasHeight - baseHeight - birdHeight;
}

function isTouchingHorizontally(birdTop) {
  const holeTop = parseInt(
    window.getComputedStyle(hole).getPropertyValue("top")
  );
  const hTop = canvasHeight + holeTop;
  return birdTop < hTop || birdTop > hTop + holeHeight;
}

function isTouchingVertically() {
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  return blockLeft < holeWidth && blockLeft > -holeWidth;
}

window.addEventListener("keydown", flapTheBird);
window.addEventListener("click", flapTheBird);

function flapTheBird() {
  jumping = 1;
  updateTheBirdImage(true);
  const birdTop = parseInt(
    window.getComputedStyle(bird).getPropertyValue("top")
  );
  if (birdTop > 6) {
    bird.style.top = birdTop - 70 + "px";
  }
  setTimeout(() => {
    jumping = 0;
    updateTheBirdImage(false);
  }, 300);
}

function updateTheBirdImage(isFlapping) {
  birdImage.src = isFlapping
    ? "assets/bird_upflap.svg"
    : "assets/bird_flap.svg";
}
