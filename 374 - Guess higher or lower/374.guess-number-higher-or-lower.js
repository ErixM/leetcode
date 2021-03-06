/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 0;
  let right = n;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let guessResult = guess(middle);
    if (guessResult == 0) return middle;
    else if (guessResult == 1) left = middle + 1;
    else right = middle - 1;
  }
};
// @lc code=end

// 63ms
// const guessHigherOrLower = function higherOrLower(n) {
//   let left = 1;
//   let right = n;
//   let middle = Math.floor((right + left) / 2);
//   while(guess(middle) != 0) {
//     const guessed = guess(middle);
//     if(guessed == 1) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//     middle = Math.floor((right + left) / 2);
//   }
//   return middle;
// }
