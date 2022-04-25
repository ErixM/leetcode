/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let candidate = 1;
  if (x < 2) return x;
  while (candidate * candidate < x) {
    candidate++;
  }
  if (candidate * candidate == x) return candidate;
  if (candidate * candidate > x) {
    return candidate - 1;
  }
  return -1;
};

/**
 * @param {number} x
 * @return {number}
 */
var myWeirdSqrt = function (x) {
  let left = 1;
  let right = x;

  let res = 0;

  while (left <= right) {
    const mid = ~~((left + right) / 2);
    if (mid <= ~~(x / mid)) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};

/**
 * @param {number} x
 * @return {number}
 */
var fastestSqrt = function (x) {
  let low = 1;
  let high = Math.round(x / 2);
  let ans = 0;
  while (low <= high) {
    let mid = low + Math.round((high - low) / 2);
    if (mid * mid === x) {
      ans = mid;
      break;
    } else if (mid * mid > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
      ans = mid;
    }
  }
  return ans;
};
// @lc code=end
