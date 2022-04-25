/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * Se abbiamo 32 elementi nell'array, dobbiamo fare massimo 5 passi per arrivare alla soluzione.
 * 5 passi perché 32 può essere diviso 5 volte. Logaritmo in base 2 di n = 5. Quindi il tempo di complessità è O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Impostiamo una "finestra" dove lavorare.
  // A sinistra 0
  let left = 0;
  // A destra l'ultimo indice dell'array nums
  let right = nums.length - 1;
  // Finchè la finestra non è chiusa
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    const current = nums[middle];
    if (current > target) {
      right = middle - 1;
    } else if (current < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};
// @lc code=end
