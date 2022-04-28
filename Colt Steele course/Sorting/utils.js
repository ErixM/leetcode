/**
 * @function swap
 * @param  {any[]} array  {description}
 * @param  {number} index1 {description}
 * @param  {number} index2 {description}
 * @return {any[]} {description}
 */
export function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
