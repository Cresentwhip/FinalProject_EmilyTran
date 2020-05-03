//Used p5.play library that is accessible in OpenProcessing

let dad, kid;
let Children = [];
let Vertical = [];
let Horizontal = [];
let Patrol = [];
// let catching = false;
let sideboundary, verticalboundary;
let xdirection = 1;
let ydirection = 1;
let maze;

class Father {
	constructor(x, y, h, w) {
		this.x = random(x); //random location
		this.y = random(y);
		this.height = h;
		this.width = w;

		this.r = int(random(255));
		this.g = int(random(255));
		this.b = int(random(255));
		this.skin = color(this.r, this.g, this.b);
	}

	display() {
		fill(this.skin);
		rect(this.x, this.y, this.height, this.width);
	}

	hiding() {
		//if collide with spot, sprite changes, and if kid is on it, capture=true
	}

}


class Kid {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;

		this.r = int(random(255));
		this.g = int(random(255));
		this.b = int(random(255));
		this.skin = color(this.r, this.g, this.b);
	}

	display() {
		fill(this.skin);
		square(this.x, this.y, this.size);

	}

	bouncesidemove() {
		this.x = this.x + ((1) * xdirection); //reversal of direction when touch wall
		if (this.x > sideboundary - this.size || this.x < 0) {
			xdirection *= -1;
		}
	}

	bounceverticalmove() {
		this.y = this.y + ((1) * ydirection); //reversal of direction when touch wall
		if (this.y > verticalboundary - this.size || this.y < 0) {
			ydirection *= -1;
		}
	}

	patrollermove() {
		if (this.x <= sideboundary) {
			this.x++;
		} else {
			this.x = 0
		}
	}

	backforthmove() {
		//LOOKLEFT
		//import left sprite
		//LOOKRIGHT
		//import right sprite
	}

	locked() {
		this.x = 350;
		this.y = 350;
	}
}



function setup() {
	createCanvas(400, 400);
	background(100);
	frameRate(120);
	
	//movements
	movements=[1,2,3];

	//maze setup
	sideboundary = 400;
	verticalboundary = 400;
	maze = 1; //first level start
	totalKids=10; // limit the kid goal

	//character setup
	for (let i = 0; i < totalKids; i++) { //create  kids on the screen per level
		Children.push(new Kid(random(sideboundary), random(verticalboundary), 25));
		Children[i].choice = int(random(1,4)); //asign movement beforehand
		
		if (Children[i].choice == 1){
		Vertical.push(Children[i]);
		} else if (Children[i].choice == 2){
		Horizontal.push(Children[i]);
		} else{
		Patrol.push(Children[i]);
		}
	}
	dad = new Father(0,0, 25, 100);

}

function draw() {
	background(100);

	//Sprite setup
	// drawSprites();
	
	//children movement
	for (let i = 0; i < Children.length; i++) {
		Children[i].display();
		}
	for (let i = 0; i < Horizontal.length; i++) {
		Horizontal[i].bouncesidemove();
		}
	for (let i = 0; i < Vertical.length; i++) {
		Vertical[i].bounceverticalmove();
		}
	for (let i = 0; i < Patrol.length; i++) {
		Patrol[i].patrollermove();
		}
	

	// kida = Children[1].bounceverticalmove();	
	// kidb = Children[2].bouncesidemove();
		dad.display();

	

	//capture mechanics
	// if (dad(collide(kid1)))
	// 	kid1.locked();
}


// function keyIsDown() {
// 	if (keyCode === LEFT_ARROW)
// 		dad.x -= 4;
// 	if (keyCode === RIGHT_ARROW)
// 		dad.x += 4;
// 	if (keyCode === UP_ARROW) {
// 		dad.y -= 4;
// 	} else if (keyCode === DOWN_ARROW) {
// 		dad.y += 4;
// 	}
// }