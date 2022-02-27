I have chosen to implement this game without Classes and objects, focusing on pure functional Javascript. This due to the way that i have been working with Reac native, were classes are no longer in fashion. However if you wish, i would happily refactor the program into a class based one.

Be aware: The game has only been tested for development mode.

The game is divided into 6 different files and runs through the following order:

1. index.js: The index file runs the main menu script which is created in gameMenu.js.
2. gameMenu.js The menu is created in this file. This is purely html and DOM manipulation. In hindsight, this could have been done implemented directly throuhg the html.index.
3. gameLogic.js Does all the logic of the game. It also initializes the game through its initGameBoard-method
4. gameComponents.js inhabits all the functions for creating game components
5. setters.js This file contains setter methods, initial data for the game as well as some specific user generated styling data.
6. utils.js there is only one method for shuffling Node list of puzzle tiles.


To play the game: 
- select difficulty 
- then drag the tiles from the rack on the right into their correct positions. If the posiotions are correct, the player will get an alert message. 
