export function insertionsort(arr, cmp = (a, b) => a - b){
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j > -1 && cmp(arr[j], temp) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}
