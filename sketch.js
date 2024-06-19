let img, sadOwl, cryOwl;
let comicSansFont;
let buttonHover = false;
let neverMindButtonHover = false;
let cancelButtonHover = false;
let sadOwlVisible = false;
let cryOwlVisible = false;
let owlY = 1080;
let owlSpeed = 20;
let cancelClickCount = 0;

function preload() {
  img = loadImage('owl.png'); 
  sadOwl = loadImage('owl sad.png');
  cryOwl = loadImage('owl cry.png');
  comicSansFont = loadFont('Comic-Sans-MS.ttf');  
}

function setup() {
  createCanvas(1920, 1080);
  background(255);
  textAlign(CENTER, CENTER);
  textFont(comicSansFont); 
  noLoop();
}

function draw() {
  background(255);  // Clear the background each time

  // Draw the background images first
  if (sadOwlVisible) {
    image(sadOwl, width - 1000, owlY, 1000, 1000);
    if (owlY > height - 1000) {
      owlY -= owlSpeed;
    }
  }

  if (cryOwlVisible) {
    image(cryOwl, width - 1000, height - 1000, 1000, 1000);
  }

  image(img, 20, 20, 150, 150); 

  fill(0);
  textSize(50);
  text("Hello User!", width / 2.5, 100);
  
  textSize(25);
  text("We’ve heard that you would like to cancel your paid subscription.", width / 2.5, 200);
  
  textSize(35);
  text("We’re sad to see you go!", width / 2.5, 250);
  
  textSize(25);
  text("If you cancel, you’ll be downgraded to a free plan. This means:\n- Constant popup ads\n- You’ll lose all premium benefits\n- Lifelong bad karma\n- In your next life you’ll be a worm\n- You’ll lose all respect from your friends\n- Bad juju wherever you go\n- You’re not going to be able to love anything ever again", width / 2.5, 470);
  
  textSize(16);
  fill(150);
  text("Ps. You’ve already paid for this month, because of that you’ll continue to have access to some premium benefits until current billing period ends.", width / 2.5, 700);
  
  textSize(22);
  fill(0);
  text("Do you want to continue?", width / 2.5, 800);
  
  drawButtons();
}

function drawButtons() {
  if (buttonHover) {
    fill(215, 188, 255);  
  } else {
    fill(135, 55, 255); 
  }
  
  noStroke();
  rectMode(CENTER);
  rect(width / 2.5, 880, 150, 60, 50);
  fill(250);
  textSize(20);
  text("Never Mind", width / 2.5, 877);

  if (cancelButtonHover) {
    fill(200, 200, 200);  
  } else {
    fill(227, 220, 227); 
  }
  
  noStroke();
  rect(width / 2.5, 950, 165, 40, 100);
  fill(250);
  textSize(14);
  text("Cancel my subscription", width / 2.5, 947);
}

function mouseMoved() {
  if (mouseX > width / 2.5 - 75 && mouseX < width / 2.5 + 75 && mouseY > 850 && mouseY < 910) {
    buttonHover = true;
  } else {
    buttonHover = false;
  }

  if (mouseX > width / 2.5 - 82.5 && mouseX < width / 2.5 + 82.5 && mouseY > 930 && mouseY < 970) {
    cancelButtonHover = true;
    sadOwlVisible = true;
    loop();
  } else {
    cancelButtonHover = false;
    sadOwlVisible = false;
    owlY = 1080;
    noLoop();
  }
  
  redraw();
}

function mousePressed() {
  if (mouseX > width / 2.5 - 75 && mouseX < width / 2.5 + 75 && mouseY > 850 && mouseY < 910) {
    window.location.href = "https://glink-182.github.io/congrats/";
  }
  
  if (mouseX > width / 2.5 - 82.5 && mouseX < width / 2.5 + 82.5 && mouseY > 930 && mouseY < 970) {
    cancelClickCount++;
    if (cancelClickCount === 2) {
      window.location.href = "https://pmaksymenko.github.io/zaliczenie2024/";
    } else {
      cryOwlVisible = true;
      sadOwlVisible = false;
      owlY = 1080;
      redraw();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
