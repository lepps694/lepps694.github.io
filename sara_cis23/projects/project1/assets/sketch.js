var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background("black")
  canvas.position(0,2950);
  canvas.style('z-index','-1');
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*
* Trick 02 
* easing 水墨
* Developed by: Yuli Cai/ caiyuli.com
*/

// 线上案例： https://editor.p5js.org/yulicai/sketches/rJd3C1xpW

let locs = [];
let trailLength = 100;
let easing = 0.1;
let diffx=diffy=x=y=0;


function draw() {
  background(255);
  diffx=mouseX-x;
  diffy=mouseY-y;
  x = x +easing *diffx;
  y = y+easing*diffy;
  locs.push({x: x, y: y});
 if(locs.length>trailLength) locs.shift();
  for (let l = 0; l < locs.length; l++) {
    let loc = locs[l];
    fill(0, (l*5));
    ellipse(loc.x, loc.y, l/2, l/2);
  }
}

// brushSize simply is the thikness of the brush stroke
// let brushSize = 40;
// let f = 0.5;
// let spring = 0.4;
// let friction = 0.45;
// let v = 0.5;
// let r = 0;
// let vx = 0;
// let vy = 0;
// let splitNum = 100;
// let diff = 8;
// function draw() {
//   if(mouseIsPressed) {
//     if(!f) {
//       f = true;
//       x = mouseX;
//       y = mouseY;
//     }
//     vx += ( mouseX - x ) * spring;
//     vy += ( mouseY - y ) * spring;
//     vx *= friction;
//     vy *= friction;
    
//     v += sqrt( vx*vx + vy*vy ) - v;
//     v *= 0.6;
    
//     oldR = r;
//     r = brushSize - v;
    
//     for( let i = 0; i < splitNum; ++i ) {
//       oldX = x;
//       oldY = y;
//       x += vx / splitNum;
//       y += vy / splitNum;
//       oldR += ( r - oldR ) / splitNum;
//       if(oldR < 1) { oldR = 1; }
//       strokeWeight( oldR+diff );  // AMEND: oldR -> oldR+diff
//       line( x, y, oldX, oldY );
//       strokeWeight( oldR );  // ADD
//       line( x+diff*1.5, y+diff*2, oldX+diff*2, oldY+diff*2 );  // ADD
//       line( x-diff, y-diff, oldX-diff, oldY-diff );  // ADD
//     }
    
//   } else if(f) {
//     vx = vy = 0;
//     f = false;
//   }
// }