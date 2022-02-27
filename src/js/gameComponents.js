import "../css/styles.scss";
import {
  setID,
  setClassName,
  setData,
  setContainerStyle,
  setTileStyle,
  setGridElementStyle,
  setButtonStyleRestart,
  elements,
} from "./setters";
import { restartGame } from "./gameLogic";

/**
 * @desc - Creates a game board container which holds the two main component-containers of the game: Grid & Rack.
 * @returns - returns a div element
 **/
function gameBoardContainer() {
  const container = document.createElement("div");
  setID(container, "board-container");
  setClassName(container, "board-container");
  return container;
}
/**
 * @desc - Creates the tile rack on the right part of screen.
 * @returns - returns an unordered list element
 **/
function rackContainer() {
  const container = document.createElement("ul");
  setID(container, "rack", "container");
  setClassName(container, "container");
  setContainerStyle(container);

  return container;
}
// const container = docc...
/**
 * container
      .addid("rack")
      .setClassName
      .setcintainerstyle
 * 
 *  */

/**
 * @desc - Creates the grid which holdes puzzle tiles
 * @returns - returns an unordered list element
 **/
function gridContainer() {
  const container = document.createElement("ul"); // sätt båda till UL så du kan göra dem till en funktion
  setID(container, "grid", "container");
  setClassName(container, "container");
  setContainerStyle(container);
  return container;
}

/**
 * @desc - generates a grid element for puzzle tiles, appends to the grid.
 **/
function generateGridElements(grid) {
  for (let i = 0; i < elements; i++) {
    const gridElement = createGridElement(i);

    grid.appendChild(gridElement);
  }
}
/**
 * @desc - Generates all puzzle- and grid elements , firstly appends grid to rack, then appends tiles as their children.
 **/
function generateTileElements(rack) {
  for (let i = 0; i < elements; i++) {
    const gridElement = createGridElement(i);
    const tileElement = createTile(i);
    gridElement.append(tileElement);
    rack.appendChild(gridElement);
  }
}
/**
 * @desc - Creates a puzzle tile element,
 * @param - index: a integer which shows what position tile should have to win game.
 * @returns - returns a paragraph element
 **/
function createTile(index) {
  const tile = document.createElement("p");
  tile.draggable = "true";
  setID(tile, "tile");
  setClassName(tile, "tile");
  setData(tile, index);
  setTileStyle(tile, index);
  return tile;
}

/**
 * @desc - Creates a grid element,
 * @param - index: a integer which shows what position the grid element will have.
 * @returns - returns a list element
 **/
function createGridElement(index) {
  const element = document.createElement("li");
  setID(element, "grid-element");
  setClassName(element, "grid-element");
  setData(element, index);
  setGridElementStyle(element);
  return element;
}
/**
 * @desc - Button which restarts the game
 * @returns - returns a button element
 **/
function restartButton() {
  const button = document.createElement("button");
  setID(button, "restart-button");
  setClassName(button, "btn-restart");
  setButtonStyleRestart(button);
  button.onclick = function () {
    restartGame();
  };
  return button;
}

export {
  gameBoardContainer,
  rackContainer,
  gridContainer,
  restartButton,
  generateGridElements,
  generateTileElements,
};
