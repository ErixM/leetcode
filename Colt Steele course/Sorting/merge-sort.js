function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);

  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const leftMerged = mergeSort(left);
  const rightMerged = mergeSort(right);

  return merge(leftMerged, rightMerged);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i += 1;
    } else {
      merged.push(right[j]);
      j += 1;
    }
  }
  while (i < left.length) {
    merged.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    merged.push(right[j]);
    j += 1;
  }
  return merged;
}
