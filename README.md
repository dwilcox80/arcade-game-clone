Classic Arcade Game Clone Project
===============================

Instructions to Install
===============
- To play, you must download or clone the repository from this one
- Open the index.html in your browser
- Alternatively, you can run a live version here:  https://dwilcox80.github.io/arcade-game-clone/

In Game Instructions/Objective
======================
- The objective of the game is to move the hero character from the grass starting area
to the water area without colliding into the enemy (bug sprites)
- To move the hero character, the user must utilize the left, right, up, and down arrow
keys
- Successful maneuvering of the hero character to the water area increases the Score
- Once a player collides with an enemy three times, the game ends
- The user can click the 'Play Again' button to reset the game

Dependencies
==========
This game requires images for both the player and the enemy.  The player sprite can be changed by
altering the Player class 'sprite' property.  For convenience, alternative images for the player sprite
can be found in the images directory.

The game also utilizes 2D collision detection.  The code for this detection was adapted from
documentation found on the Mozilla Developer Network.  The pathway to the documentation can
be found in the comments on the engine.js file.
