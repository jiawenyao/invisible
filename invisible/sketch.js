var video;
var squarein, squareout;
var img, img1, img2, img3, flashlight, got,book, bgd, tube, pipe, bgm, b51;
var clickSound = [];
var mouthlight = false;

var sure = false;
var on1 = true;
var on2 = false;
var on3 = false;
var onintro1 = true;
var onintro2 = true;
var scene2 = false;
var button_clicked = false;

var two = false;
var say = false;
var sectwo = false;
var the = false;
var is = false;
var to = false;
var plus = false;
var four = false;
var that = false;
var freedom = false;
var make = false;
var all = false;
var lookfor = false;

var p1=false;
var p2=false;
var p3=false;
var p4=false;
var p5=false;
var p6=false;
var p7=false;
var p8=false;
var p9=false;
var p10=false;
var p11=false;


var vScale = 16;
var slider;
var font,
  fontsize = 16;
var input, button;
var counter = 0;

var countup = 0;


var p;
var pages = [];
var pbright;


function preload() {

  img1 = loadImage("img/page1.png");
  img2 = loadImage("img/page2.png");
  img3 = loadImage("img/page3.png");
  squarein = loadImage("img/squarein.png")
  squareout = loadImage("img/squareout.png")
  flashlight = loadImage("img/flashlight.png");
  got = loadImage("img/gotit.png");
  b51 = loadImage("img/b51.png");
  font = loadFont("ffffont/Courier-Prime-4.ttf");
  bgm = loadSound("sound/msc.mp3");
  for (var i = 0; i < 14; i++) {
    clickSound[i] = loadSound("sound/m" + i + ".mp3");
  }
}

function setup() {
  //createCanvas(1024, 768);
  createCanvas(windowWidth, windowHeight);
  // if you work on Hi-density display you need to add the following line
  pixelDensity(1);
  frameRate(30);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  video.hide();
  // input = createInput();

  //input.hide();
  // button = createButton('send');
  // button.position(input.x + input.width, height - 75);
  // button.mouseClicked(replace);


  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();
  slider = createSlider(0, 255, 8);
  textFont(font);
  textSize(fontsize);
  textAlign(LEFT, CENTER)
  pages = [img1, img2, img3];
  img = pages[0];

  bgm.loop();
  //bgm.playMode('restart');
}

function draw() {
  background(0);


  // intro();
  // if (scene2 == true && on1 == false) {
  //   // image(b51, 0, 0, width, height);
  //   // image(bgd, 600, 100, bgd.width / 5, bgd.height / 5);
  //   // image(tube, 30, 250, 680, 680);
  //   // image(pipe, 0, 250, 700, 700);
  //   boothscene();
  // } else if (lookfor == true) {
    if (all == false) {
      if (mouthlight == true) {
        backuplight();
      } else {
        inspect();
      }
    } else {
      message();
    }


  //}
}





function mousePressed() {
  //detect if go with flashlight or cameralight
  if (mouseX > (width - 100) && mouseY < 90) {
    mouthlight = !mouthlight;
    soundEffect();
  } else if (scene2 == true && mouseX > 750 && mouseX < 810 && mouseY > height - 150 && mouseY < height - 130) {
    button_clicked = true;
    soundEffect();
  } else if (mouseX > width - 100 && mouseX < width - 50 && mouseY > 335 && mouseY < 375) {
    img = pages[0];
    on1 = true;
    on2 = false;
    on3 = false;

    soundEffect();
  } else if (mouseX > width - 100 && mouseX < width - 50 && mouseY > 385 && mouseY < 425) {
    img = pages[1];
    on1 = false;
    on2 = true;
    on3 = false;
    soundEffect();
  } else if (mouseX > width - 100 && mouseX < width - 50 && mouseY > 435 && mouseY < 475) {
    img = pages[2];
    on1 = false;
    on2 = false;
    on3 = true;
    soundEffect();
  } else if (p1==false&&on1 == true && mouseX > 660 && mouseX < 780 && mouseY > 60 && mouseY < 120) {
    two = true;
    soundEffect();
  } else if (p2==false&&on1 == true && mouseX > 1100 && mouseX < 1200 && mouseY > 160 && mouseY < 215) {
    say = true;
    soundEffect();
  } else if (p3==false&&on1 == true && mouseX > 340 && mouseX < 390 && mouseY > 410 && mouseY < 570) {
    sectwo = true;
    soundEffect();
  } else if (p4==false&&on1 == true && mouseX > 810 && mouseX < 890 && mouseY > 710 && mouseY < 760) {
    the = true;
    soundEffect();
  } else if (p5==false&&on2 == true && mouseX > 890 && mouseX < 950 && mouseY > 140 && mouseY < 200) {
    is = true;
    soundEffect();
  } else if (p6==false&&on2 == true && mouseX > 1070 && mouseX < 1130 && mouseY > 290 && mouseY < 345) {
    to = true;
    soundEffect();
  } else if (p7==false&&on2 == true && mouseX > 360 && mouseX < 410 && mouseY > 640 && mouseY < 700) {
    plus = true;
    soundEffect();
  } else if (p8==false&&on3 == true && mouseX > 340 && mouseX < 410 && mouseY > 5 && mouseY < 60) {
    four = true;
    soundEffect();
  } else if (p9==false&&on3 == true && mouseX > 430 && mouseX < 530 && mouseY > 400 && mouseY < 460) {
    that = true;
    soundEffect();
  } else if (p10==false&&on3 == true && mouseX > 620 && mouseX < 815 && mouseY > 800 && mouseY < 860) {
    freedom = true;
    soundEffect();
  } else if (p11==false&&on3 == true && mouseX > 340 && mouseX < 410 && mouseY > 860 && mouseY < 920) {
    make = true;
    soundEffect();
  } else if (onintro1 == true && onintro2 == true && mouseX > 20 && mouseX < 70 && mouseY > 200 && mouseY < 225) {
    sure = true;
    onintro1 = false;
    soundEffect();
  } else if (onintro1 == false && onintro2 == true && mouseX > 0 && mouseX < (width - 100) && mouseY > 200 && mouseY < height) {
    onintro2 = false;
    scene2 = true;
    soundEffect();
  } else if (onintro1 == false && onintro2 == true && mouseX > (width - 90) && mouseX < (width - 30) && mouseY > 95 && mouseY < 150) {
    lookfor = true;
    onintro2 = false;
    on1 = true;
    soundEffect();
  } else if (scene2 == true && on1 == false && mouseX > (width - 90) && mouseX < (width - 30) && mouseY > 95 && mouseY < 150) {
    lookfor = true;
    onintro2 = false;
    on1 = true;
    scene2 = false;
    input.hide();
    soundEffect();

  }
}

function soundEffect() {
  var r = int(random(14));
  clickSound[r].play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function inspect() {
  frameRate(15);
  background(0);
  video.loadPixels();
  loadPixels();
  var centerX, centerY;

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var indexLoc = (x + (y * video.width)) * 4;
      var r = video.pixels[indexLoc + 0]; // r value from the video
      var g = video.pixels[indexLoc + 1]; // g value from the video
      var b = video.pixels[indexLoc + 2]; // b value from the video
      pbright = (r + b + g) / 3;


      if (pbright > 253) {
        centerX = (video.width - x + 1) * vScale;
        break;
      }
    }
    if (pbright > 253) {
      centerY = y * vScale;
      // fill(255);
      // ellipse(centerX, centerY,30,30);
      // img1.loadPixels();
      for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
          //var pixloc = (y*img.width + x)*4;
          var maxdist = 100;
          var d = dist(i, j, centerX, centerY);
          var loc = (i + j * img.width) * 4;
          var light = img.pixels[loc];
          var adjustbrightness = 255 * (maxdist - d) / maxdist;
          light += adjustbrightness;
          light = constrain(light, 0, 255);
          var pixloc = (i + j * width) * 4;
          pixels[pixloc + 0] = light;
          pixels[pixloc + 1] = light;
          pixels[pixloc + 2] = light;
          pixels[pixloc + 3] = 255; // alpha value
        }
      }
      break;
    }
  }
  updatePixels();
  getOne();
  navigation();
  getAll();
}

function backuplight() {
  background(0);
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      // Calculate the 1D location from a 2D grid
      var loc = (x + y * img.width) * 4;
      // Get the R,G,B values from image
      var r, g, b;
      r = img.pixels[loc];
      // Calculate an amount to change brightness based on proximity to the mouse
      var maxdist = 80;
      var d = dist(x, y, mouseX, mouseY);
      var adjustbrightness = 255 * (maxdist - d) / maxdist;
      r += adjustbrightness;
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
      //color c = color(r, g, b);
      var pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
  getOne();
  navigation();
  getAll();
}

function navigation() {

  if (on1 == true) {
    image(squarein, width - 90, 340, 30, 30);
    image(squareout, width - 90, 390, 30, 30);
    image(squareout, width - 90, 440, 30, 30);
    image(flashlight, width - 100, 20, 70, 70);
  }
  if (on2 == true) {
    image(squareout, width - 90, 340, 30, 30);
    image(squarein, width - 90, 390, 30, 30);
    image(squareout, width - 90, 440, 30, 30);
    image(flashlight, width - 100, 20, 70, 70);
  }
  if (on3 == true) {
    image(squareout, width - 90, 340, 30, 30);
    image(squareout, width - 90, 390, 30, 30);
    image(squarein, width - 90, 440, 30, 30);
    image(flashlight, width - 100, 20, 70, 70);
  }
  if (onintro1 == false && onintro2 == true) {
    image(book, width - 90, 100, 45, 45);
  }
  if (scene2 == true && on1 == false) {
    image(book, width - 90, 100, 45, 45);
  }
}

function getAll() {
  if (countup == 11) {
    all = true;
  }

  // if (two == true && say == true && sectwo == true && the == true && is == true &&
  //   to == true && plus == true && four == true && that == true &&
  //   freedom == true && make == true) {
  //   all = true;
  // }
}

function getOne() {
  if (two == true && on1 == true) {
    p1=true;
    countup = countup+1;
    two = false;

  }
  else if (say == true && on1 == true) {

    p2=true;
    countup = countup+1;
    say = false;
  }
  else if (sectwo == true && on1 == true) {

    p3=true;
    countup = countup+1;
    sectwo = false;
  }
  else if (the == true && on1 == true) {

    p4=true;
    countup = countup+1;
    the = false;
  }
  else if (is == true && on2 == true) {

    p5=true;
    countup = countup+1;
    is = false;
  }
  else if (to == true && on2 == true) {

    p6=true;
    countup = countup+1;
    to = false;
  }
  else if (plus == true && on2 == true) {

    p7=true;
    countup = countup+1;
    plus = false;
  }
  else if (four == true && on3 == true) {

    p8=true;
    countup = countup+1;
    four = false;
  }
  else if (that == true && on3 == true) {

    p9=true;
    countup = countup+1;
    that = false;
  }
  else if (freedom == true && on3 == true) {

    p10=true;
    countup = countup+1;
    freedom = false;
  }
  else if (make == true && on3 == true) {

    p11=true;
    countup = countup+1;
    make = false;
  }

if (p1 == true&& on1 == true){
  image(got, 660, 60, 50, 50);
}
if (p2 == true&& on1 == true){
  image(got, 1100, 160, 50, 50);
}
if (p3 == true&& on1 == true){
  image(got, 330, 450, 50, 50);
}
if (p4 == true&& on1 == true){
  image(got, 810, 710, 50, 50);
}
if (p5 == true&& on2 == true){
  image(got, 890, 140, 50, 50);
}
if (p6 == true&& on2 == true){
  image(got, 1070, 290, 50, 50);
}
if (p7 == true&& on2 == true){
  image(got, 360, 640, 50, 50);
}
if (p8 == true&& on3 == true){
  image(got, 340, 5, 50, 50);
}
if (p9 == true&& on3 == true){
  image(got, 430, 405, 50, 50);
}
if (p10 == true&& on3 == true){
  image(got, 620, 800, 50, 50);
}
if (p11 == true&& on3 == true){
  image(got, 340, 860, 50, 50);
}
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(countup + "/11", 30, 30);
}

function message() {

       fill(0);
      
  var offset3 = random(9);
  var i = width / 2 - 300;
  var j = height / 2 - 200;
  shake = false;
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text("Freedom is the freedom to say that 2 + 2 = 4", i + offset3, j + offset3);
  text("SENDING...", i + 80, j + 60);
  for (var k = 0; k < 100; k += 1) {
    var p = k + "%";
    text(p, i + 180, j + 60);
  }


}
