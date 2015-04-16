export function quicksort(arr, cmp = (a, b) => a - b) {
  if (arr.length === 0) return [];

  var left  = [],
      right = [],
      pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    (cmp(arr[i], pivot) < 0) ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quicksort(left, cmp).concat(pivot, quicksort(right, cmp));
}
