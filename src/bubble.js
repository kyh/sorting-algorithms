export function bubblesort(arr, cmp = (a, b) => a - b){
  var swapped;
  if (arr.length < 2) {
    return arr;
  }

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1;
      if (cmp(arr[j], arr[i]) < 0) {
        _swap(arr, i, j);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

function _swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
