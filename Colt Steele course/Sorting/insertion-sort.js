import { swap } from './utils';

/**
 * @function insertionSort
 * @param  {number[]} array {Unsorted}
 * @return {number[]} {Sorted}
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0 && array[j] > array[j + 1]; j--) {
      swap(array, j, j + 1);
    }
  }
  return array;
}
