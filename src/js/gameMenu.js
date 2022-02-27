//modal
import "../css/styles.scss";
import { initGameBoard } from "./gameLogic";
import { setClassName, setID } from "./setters";
/**
 * @desc - Creates modal for game menu
 * @returns - returns div elemenet as modal
 **/

export function gameMenu() {
  // create elements for main menu
  const element = document.createElement("div");
  const modalContainer = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const headerDifficulty = document.createElement("span");
  const header = document.createElement("span");
  // set element id's and class name.
  setID(element, "modal");
  setClassName(modalContainer, "modal-container");
  setClassName(buttonContainer, "button-container");
  setClassName(headerDifficulty, "h2");
  setClassName(header, "aftonbladet");
  setClassName(element, "modal");
  generateButtons(buttonContainer);

  headerDifficulty.innerText = "Select difficulty";
  header.innerText = "Aftonbladet - The puzzle";

  // append html elements to modal div & append to game wrapper.
  modalContainer.appendChild(headerDifficulty);
  modalContainer.appendChild(buttonContainer);
  element.appendChild(header);
  element.appendChild(modalContainer);
  document.getElementById("wrapper").appendChild(element);

  return element;
}

function generateButtons(parent) {
  for (let index = 0; index < 4; index++) {
    const btn = document.createElement("button");
    setClassName(btn, "btn-difficulty");
    setID(btn, "btn-difficulty");
    btn.dataset.selected = false;
    btn.innerHTML = index + 1;
    // sets index for difficulty
    btn.dataset.index = index + 2;

    btn.onclick = function () {
      //starts game on click
      initGameBoard(btn.dataset.index);
      //hides menu
      document.getElementById("modal").style.display = "none";
    };
    parent.appendChild(btn);
  }
}
