/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

/**
 * Slower but first working version;
 * var intToRoman = function (num) {
  const finalNumber = [];
  const pentas = ['V', 'L', 'D'];
  const decas = ['I', 'X', 'C', 'M'];

  const string = String(num);
  let i = 0;
  let j = string.length - 1;
  while (i < string.length) {
    const number = Number(string[j]);
    if (number === 0) {
      i += 1;
      j -= 1;
    } else {
      const penta = pentas[i];
      const deca = decas[i];
      const nextDeca = decas[i + 1];
      console.log({ number }, { penta }, { deca }, { nextDeca });

      if (number <= 3) finalNumber.push(deca.repeat(number));
      else if (number == 4) finalNumber.push(deca + penta);
      else if (number == 5) finalNumber.push(penta);
      else if (number >= 6 && number <= 8)
        finalNumber.push(penta + deca.repeat(number - 5));
      else if (number == 9) finalNumber.push(deca + nextDeca);
      i += 1;
      j -= 1;
    }
  }
  return finalNumber.reverse().join('');
};
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let finalNumber = '';
  const pentas = ['V', 'L', 'D'];
  const decas = ['I', 'X', 'C', 'M'];

  const string = String(num);
  let i = 0;
  let j = string.length - 1;
  while (i < string.length) {
    const number = Number(string[j]);

    if (number > 0) {
      const penta = pentas[i];
      const deca = decas[i];
      const nextDeca = decas[i + 1];

      if (number <= 3) finalNumber = deca.repeat(number) + finalNumber;
      else if (number == 4) finalNumber = deca + penta + finalNumber;
      else if (number == 5) finalNumber = penta + finalNumber;
      else if (number >= 6 && number <= 8)
        finalNumber = penta + deca.repeat(number - 5) + finalNumber;
      else if (number == 9) finalNumber = deca + nextDeca + finalNumber;
    }
    i += 1;
    j -= 1;
  }
  return finalNumber;
};
// @lc code=end
