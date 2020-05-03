let obstacle_height = 50;
let obstacle_width = 20;
let totalObs = 10; //max obstacles
let Obstacles = [];
let LevelOneObstacles = [];
let LevelTwoObstacles = [];
let LevelThreeObstacles = [];

function setup() {
	//3 obstacles per level
	for (let i = 0; i < totalObs; i++) { //create  kids on the screen per level
		Obstacles.push(new createSprite());
		Obstacles[i].choice = int(random(1, 4)); //asign movement beforehand

		if (Obstacles[i].choice == 1) {
			LevelOneObstacles.push(Obstacles[i]);
		} else if (Children[i].choice == 2) {
			LevelTwoObstacles.push(Obstacles[i]);
		} else {
			LevelThreeObstacles.push(Obstacles[i]);
		}


	}

	function draw() {

	}