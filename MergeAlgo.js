let array = [70, 50, 30, 10, 20, 40, 60];

function mergeSort(array) {
  let l = 0;
  let r = array.length;
  let m = Math.round((r - l) / 2);

  if (r === 1) {
    return; // returns recursively
  }

  let L = []; // left half of current array
  let R = []; // right half of current array

  for (let i = l; i < m; i++) {
    L.push(array[i]);
  }
  for (let j = m; j < r; j++) {
    R.push(array[j]);
  }

  mergeSort(L);
  mergeSort(R);

  let i = 0,
    j = 0,
    k = 0;

  // Merging part
  while (i < L.length && j < R.length) {
    if (L[i] < R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }

    k++;
  }

  while (i < L.length) {
    array[k] = L[i];
    i++;
    k++;
  }

  while (j < R.length) {
    array[k] = R[j];
    j++;
    k++;
  }
}

mergeSort(array);
console.log(array); // [Log]: [10, 20, 30, 40, 50, 60, 70]

// Time complexity of merge sort is O(NlogN)
// Space complexity is N, because we use an auxiliary array to sort all elements
