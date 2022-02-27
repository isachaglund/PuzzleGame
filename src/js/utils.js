/**
 * @desc - Shuffles the list. Utilizes the fact that appending an already excisting node changes the original index to the last.
 *  This lowers time complexity from just taking random index and putting into new array O(n^2) since we would need a while loop of n length and pop array n times.
 * also space complexity would be used for extra which would be O(n)
 * @param - takes a node list
 **/
export function shuffle(list) {
  for (let i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[(Math.random() * i) | 0]); //
  }
}
