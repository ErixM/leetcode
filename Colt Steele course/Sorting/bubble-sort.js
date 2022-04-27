/**
 * @function bubbleSort
 * @param  {number[]} array {unsorted}
 * @return {number[]} {sorted}
 */
function bubbleSort(array) {
  let counter = 0;
  for (let i = array.length; i > 0; i--) {
    let swapWasMade = false;
    // j parte da i -1 perché l'ultimo elemento dell'array
    // sarà sempre quello più grande, quindi non serve andare
    // sempre fino in fondo ma solo fino all'ultimo elemento riordinato.
    for (let j = 0; j < i - 1; j++) {
      counter++;
      if (array[j] > array[j + 1]) {
        // or [array[j], array[j + 1]] = [array[j + 1], array[j]];
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        swapWasMade = true;
      }
    }
    // if (!swapWasMade) break;
  }
  console.log(counter);
  return array;
}
