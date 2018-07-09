// Enemies our player must avoid
class Enemy {
	constructor(x, y, speed) {
		this.x = x;  //position on x axis
		this.y = y;  //position on y axis
		this.speed = speed; //for calculating how fast they crawl...eww
	     this.sprite = 'images/enemy-bug.png';
	}
	// Update the enemy's position using dt, a time delta between ticks
	update(dt) {
	//multiply movement by the dt parameter for smooth animation
		this.x += this.speed * dt;
		if (this.x > 505) {
			this.x = -50;
			this.speed = 200 + Math.floor(Math.random() * 200 + 1);
		}
	}
	// Draw the enemy on the screen, required method for game
	render () {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Enemy {
	//set Player class propterties
	constructor (x, y, speed) {
		super (x, y, speed);
		this.sprite = 'images/char-boy.png';
		this.score = 0; // for tracking the score
		this.lives = 3; // for tracking lives remaining
		this.liveSprite = 'images/Heart.png';
	}
	// draw character, score, and number of lives on screen
	render () {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		ctx.font  = '20pt sans-serif';
		ctx.fillText(`Score:   ${this.score}`, 10, 40);
		for (let i = 0; i < this.lives; i++) {
			ctx.drawImage(Resources.get(this.liveSprite), i * 40 + 385, 5, 30, 45);
		}
	}
	// handle keyboard inputs to move character
	handleInput(keypress) {
		switch (keypress) {
		 	case 'left':
				this.x -= 100;
		          break
			case 'right':
				this.x += 100;
				break;
	          case 'down':
				this.y += 90;
				break;
			case 'up':
				this.y -= 90;
				if (this.y === -45) {
					this.score += 100;
				}
				break;
		}
	}
	// prevent player from moving offscreen and
	// move player back to start if they reach the end
	update() {
		if (this.y === -45) {
		     setTimeout(function() {
			    player.x = 202;
			    player.y = 405;
		    }, 500);
	    }
		if (this.x > 402) {
			this.x = 402;
		}
		if (this.x < 2) {
			this.x = 2;
		}
		if (this.y > 405) {
			this.y = 405;
		}
		if (this.y < 0) {
			this.y = -45;
		}
	}
	// reset lives and score counter if the game ends
	reset() {
		this.lives = 3;
		this.score = 0;
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let enemyStart = [66, 147, 227, 307];
let player = new Player(202.5, 405, 50);

// add enemies to allEnemies array to start the game
enemyStart.forEach(function(y) {
	let enemy = new Enemy(0, y, 1500);
	allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// create eventListener to handle resetting game after Game Over
let button = document.getElementById('reset');
button.addEventListener('click', function(evt) {
	let modal = document.querySelector('.modal');
	modal.style.display = 'none';
	player.reset();
});
