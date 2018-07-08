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


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
