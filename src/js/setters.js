/**
 * @desc - Parameters needed to initialize the game
 **/
export let dimension;
export let elements;
export let tileHeight;
export let tileWidth;
export let src;
export const height = 800;
export const width = 800;

/**
 * @desc - Sets number of columns and rows of game
 * @params - Integer dimension
 **/
function setDimension(dim) {
  dimension = dim;
  elements = dim * dim;
  tileWidth = Math.floor((width * 0.97) / dim);
  tileHeight = Math.floor((height * 0.99) / dim);
  src = "https://picsum.photos/800/800";
}

/**
 * @desc - Sets element id
 * @params - Takes a html element, preferred id
 **/
function setID(element, id) {
  element.id = id;
}

/**
 * @desc - Sets Class name
 * @params - Takes a html element, preferred name
 **/
function setClassName(element, className) {
  element.className = className;
}

/**
 * @desc - Sets element dataset: index and also is empty flag for grid.
 * @params - Takes a html element, Integer index
 **/
function setData(element, index) {
  element.dataset.index = index;
}

/**
 * @desc - Getter function: gives the top & left coordinates to render tile.
 * @params - Integer index
 * @return - returns coordinates
 **/
function getTileCoordinates(index) {
  const x = tileWidth * (index % dimension);
  const y = tileHeight * Math.floor(index / dimension);
  return { x, y };
}

/**
 * @desc - Styles for rack and grid containers
 * @params - html element to be styled
 **/
function setContainerStyle(element) {
  element.style.height = `${height}px`;
  element.style.width = `${width}px`;
}

/**
 * @desc - Styles for tile
 * @params - html element to be styled, integer index.
 **/
function setTileStyle(element, index) {
  const { x, y } = getTileCoordinates(index);
  element.style.height = `${tileHeight}px`;
  element.style.width = `${tileWidth}px`;
  element.style.backgroundImage = `url(${src})`;
  // sets what part of the original image you see.
  element.style.backgroundPosition = `-${x}px -${y}px`;
}

/**
 * @desc - Styles for grid element
 * @params - html element to be styled
 **/
function setGridElementStyle(element) {
  element.style.height = `${tileHeight}px`;
  element.style.width = `${tileWidth}px`;
  element.style.borderLeft = "3px solid #dd2a30";
  element.style.listStyleType = "none";
}

/**
 * @desc - Styles for restart-button
 * @params - html element to be styled
 **/
function setButtonStyleRestart(button) {
  button.innerText = "RESTART";
  button.type = "submit";
}

export {
  setID,
  setClassName,
  setData,
  getTileCoordinates,
  setContainerStyle,
  setTileStyle,
  setGridElementStyle,
  setButtonStyleRestart,
  setDimension,
};
