export function selectionsort(arr, cmp = (a, b) => a - b){
  if (!arr.length || arr.length == 1) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let iMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (cmp(arr[j], arr[iMin]) < 0) {
        iMin = j;
      }
    }
    if (iMin !== i) {
      _swap(arr, i, iMin);
    }
  }

  return arr;
}

function _swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
