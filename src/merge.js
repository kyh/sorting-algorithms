export function mergesort(arr, cmp = (a, b) => a - b) {
  if (arr.length < 2) return arr;

  var middle = Math.floor(arr.length / 2);
  var left = mergesort(arr.slice(0, middle), cmp);
  var right = mergesort(arr.slice(middle), cmp);

  return merge(left, right, cmp);
}

function merge(left, right, cmp) {
  var result = [];

  while (left.length && right.length) {
    var smaller = (cmp(left[0], right[0]) < 0) ?
      left.shift() : right.shift();
    result.push(smaller);
  }

  return result.concat(left.length ? left : right);
}
