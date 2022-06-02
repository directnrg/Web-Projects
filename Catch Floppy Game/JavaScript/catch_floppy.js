/*Assignment 5 
Fabian Andres soto Palacio
Student Number - 301153142*/

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 740;
canvas.height = 580;
document.getElementById("gameCanvas").appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background-2dgame.png";

// character image
var birdReady = false;
var birdImage = new Image();
birdImage.onload = function () {
	birdReady = true;
};
birdImage.src = "images/bird-character.png";

// Game objects
var bird = {
	speed: 256 // movement in pixels per second
};

var birdsCaught = 0;
var totalScore = 0;
var hopInterval = 2000;
var birdHop = setInterval(function () {
	reset();
}, hopInterval);

//event listeners for reset buttons
function clickEventListeners() {
	var resetScoreButton = document.getElementById("resetScoreButton");
	var resetSpeedButton = document.getElementById("resetSpeedButton");
	var resetBirdsButton = document.getElementById("resetBirdsButton");

	if (resetScoreButton.addEventListener) {
		resetScoreButton.addEventListener("click", resetScore, false)
	} else if (resetScoreButton.attachEvent) {
		resetScoreButton.attachEvent("onclick", resetScore)
	}
	if (resetSpeedButton.addEventListener) {
		resetSpeedButton.addEventListener("click", resetSpeed, false)
	} else if (resetSpeedButton.attachEvent) {
		resetSpeedButton.attachEvent("onclick", resetSpeed)
	}
	if (resetBirdsButton.addEventListener) {
		resetBirdsButton.addEventListener("click", resetBirdsCounter, false)
	} else if (resetBirdsButton.attachEvent) {
		resetBirdsButton.attachEvent("onclick", resetBirdsCounter)
	}

	canvas.addEventListener("mousedown", clicked, false);
	function clicked(event) {
		event.preventDefault();
		var yAx = event.offsetY;
		var xAx = event.offsetX;

		if (xAx >= (bird.x) 
		&& xAx <= (bird.x +52) 
		&& yAx >= (bird.y) 
		&& yAx <= (bird.y+ 39)) {
			totalScore += 150;
			reset();

			if (hopInterval - 100 >= 50) {
				clearInterval(birdHop);
				hopInterval -= 100;
				birdHop = setInterval(function () {
					reset();
				}, hopInterval);
			}
			birdsCaught++;
		}
	}
}

// reset bird position after capturing a bird.
var reset = function () {
	bird.x = 52 + (Math.random() * (canvas.width - 104));
	bird.y = 39 + (Math.random() * (canvas.height - 78));
};

var resetSpeed = function () {
	clearInterval(birdHop);
	hopInterval = 2000;
	birdHop = setInterval(function () {
		reset();
	}, hopInterval);
	resetScore();
};

var resetScore = function () {
	totalScore = 0;
	clearInterval(birdHop);
	hopInterval = 2000;
};

var resetBirdsCounter = function () {
	birdsCaught = 0;
	resetSpeed();
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
	if (birdReady) {
		ctx.drawImage(birdImage, bird.x, bird.y);
	}

	// Score
	document.getElementById("score").innerHTML = "Score: " + totalScore;
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Birds Caught: " + birdsCaught, 32, 32);
};

// The main game loop
var main = function () {
	render();
	requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
clickEventListeners();
reset();
main();