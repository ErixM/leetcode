/**
 * @function selectionSort
 * @param  {number[]} array {Unsorted}
 * @return {number[]} {Sorted}
 */
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) minimumIndex = j + 1;
    }
    // if (array[i] !== array[minimumIndex]) {
    [array[i], array[minimumIndex]] = [array[minimumIndex], array[i]];
    // }
  }
  return array;
}
