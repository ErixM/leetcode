// Interview question
function getSmallestWord(words, inputWord) {
  const dictionary = {};
  words.forEach((word) => {
    let wordBuilder = [];
    let position = null;
    for (let i = 0; i < word.length - 1; i++) {
      for (let j = word.length; j > 0; j--) {}
    }
  });
  console.log({ dictionary });
}
function setObjectLetter(object, string) {
  // {}, 'dog';
  let current = string[0]; // d
  let next = string[1]; // o
  object[current] = { [next]: {} };
  console.log({ object }, object[current], { string });
  if (next) {
    setObjectLetter(object[next], string.slice(1));
  }
}
function longGetSmallestWord(words, target) {
  for (const word of words) {
    if (word.startsWith(target[0]) && word.includes(target)) return word;
  }
}
