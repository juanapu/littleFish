// let game = new Game();

// window.onload = game.prepare();

// bottom layer: background, fruit, grass
// top layer: fish, scrore, dust

let can1, can2, ctx1, ctx2,canWid,canHt,bgimg,
 lastTime, // 
 //use to smooth control game movement
 deltaTime // get the time gap betweent two frames = now - lastTime
;

window.onload = game;

function game(){
	init();
	gameLoop();
}

function init(){
	 can1 = document.getElementById('canvas1'); //fish, scrore, dust
	 can2 = document.getElementById('canvas2'); //background, fruit, grass
     ctx1 = can1.getContext('2d');
     ctx2 = can2.getContext('2d');
     lastTime = Date.now();

     bgimg =  new Image();
     bgimg.src = './img/background.jpg';
     
     canWid = can1.width;
     canHt = can1.height;
}

function gameLoop(){
	window.requestAnimFrame(gameLoop);	
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();
	// console.log(deltaTime)
	drawBg(ctx2,bgimg,0,0,canWid, canHt)
}