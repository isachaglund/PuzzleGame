import "../css/styles.scss";
import { shuffle } from "./utils";
import {
  rackContainer,
  gridContainer,
  restartButton,
  generateGridElements,
  generateTileElements,
  gameBoardContainer,
} from "./gameComponents";
import { setDimension, elements } from "./setters";

let board;
let rack;
let grid;
let restart;
let dragged;
let gridNodes;
let tileNodes;
let difficulty;

/**
 * @desc - Initializes the game, adding all its components to the DOM.
 **/
export function initGameBoard(dimension = 4) {
  setDimension(dimension);
  /* #1 create containers for game components */
  board = gameBoardContainer();
  rack = rackContainer();
  grid = gridContainer();
  restart = restartButton();
  difficulty = calculateDifficulty(dimension);

  /* #2 create tiles and grid */
  generateGridElements(grid, difficulty);
  generateTileElements(rack, difficulty);

  /* #3 append rack and grid to game board container */
  board.appendChild(grid);
  board.appendChild(rack);

  /* #4 append game components to application wrapper */
  let wrapper = document.getElementById("wrapper");
  wrapper.appendChild(board);
  wrapper.appendChild(restart);

  /* #5 Shuffle the tiles */
  shuffle(rack);

  /* #6 Get nodelists of tiles and grids */
  gridNodes = document.querySelectorAll("li");
  tileNodes = document.querySelectorAll("p");

  /* #7 add event listeners */
  addEventListenersTiles(tileNodes);
  addEventListenerGrid(gridNodes);
}

/**
 * @desc -Calculates difficulty based on user input
 * @returns - return integer
 **/
function calculateDifficulty(dimension) {
  const difficulty = (dimension * dimension) / 2;
  return difficulty;
}

/**
 * @desc - Check if player has won the game
 * @returns - Returns boolean
 * @example - If player has won, returns true. Else false
 **/
function checkVictory() {
  const gameBoardTilesLi = document.getElementById("grid").childNodes;
  let victory = true;
  gameBoardTilesLi.forEach((li) => {
    // compares grid indices to tile index
    if (li.dataset?.index !== li.firstChild?.dataset?.index) {
      victory = false;
    }
  });
  return victory;
}

/**
 * @desc - Restarts the game and brings player back to menu in order to choose difficulty
 **/
export function restartGame() {
  // remove previous html elements
  document
    .getElementById("wrapper")
    .removeChild(document.getElementById("board-container"));
  document
    .getElementById("wrapper")
    .removeChild(document.getElementById("restart-button"));
  // show main menu
  document.getElementById("modal").style.display = "flex";
}

/**
 * @desc - Adds eventlistener to the tile components in order for them to be draggable
 **/
function addEventListenersTiles(tileNodes) {
  for (let j = 0; j < tileNodes.length; j++) {
    tileNodes[j].addEventListener(
      "dragstart",
      function (event) {
        dragged = event.target;
      },
      false // no bubbling
    );
  }
}

/**
 * @desc - Adds eventlisteners to the grid components in order for them to be droppable.
 * also calls checkVictory() when grid is full.
 **/
function addEventListenerGrid(gridNodes) {
  for (let k = 0; k < gridNodes.length; k++) {
    gridNodes[k].addEventListener(
      "dragover",
      function (event) {
        // prevent default to allow drop
        event.preventDefault();
      },
      false
    );

    gridNodes[k].addEventListener(
      "drop",
      function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();

        // drop condition, if grid node has no children, drop is possible
        if (
          event.target.id === "grid-element" &&
          !event.target.hasChildNodes()
        ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild(dragged);
          event.target.appendChild(dragged);
        }

        // If every grid has a child, then game is over. Check winning condition.
        let count = 0;
        document.getElementById("grid").childNodes.forEach((li) => {
          if (li.hasChildNodes()) {
            count++;
          }
          if (count === elements) {
            if (checkVictory()) {
              setTimeout(alertFunction, 500);
              function alertFunction() {
                alert("Victory");
              }
            } else {
              setTimeout(alertFunction, 500);
              function alertFunction() {
                alert("Try again!");
              }
            }
          }
        });
      },
      false // no bubbling
    );
  }
}
