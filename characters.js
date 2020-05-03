
function setup(){

	father = createSprite(x,y,w,h);
	kid = createSprite();
	
	
}

function draw(){
//Dad movement
	if (keyIsDown(LEFT_ARROW)) {
		dad.x -= 5;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		dad.x += 5;
	}
	if (keyIsDown(UP_ARROW)) {
		dad.y -= 5;
	} else if (keyIsDown(DOWN_ARROW)) {
		dad.y += 5;
	}
}