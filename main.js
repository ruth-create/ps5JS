function preload() {
    img=loadImage('https://img.lovepik.com/original_origin_pic/18/09/09/3d686f89303c660f8e033e23a6521700.png_wh300.png');
    }
    
    function setup() {
    createCanvas(700,550);
    }
    
    function draw() {
    image(img,300,220,150,120);
    
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(600,150,20,250);
      
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(150,150,20,250);
      
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(150,150,450,20);
      
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(150,400,450,20);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 160, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 160, 55, 55);
    
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 410, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 410, 55, 55);
    }
