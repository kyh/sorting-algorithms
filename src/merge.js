export function mergesort(arr, cmp = (a, b) => a - b){

    if (arr.length < 2) {
        return arr;
    }

    var middle = Math.floor(arr.length / 2),
        left    = arr.slice(0, middle),
        right   = arr.slice(middle);

    return _merge(mergesort(left, cmp), mergesort(right, cmp), cmp);
}

function _merge(left, right, cmp){
    var result  = [],
        iLeft   = 0,
        iRight  = 0;

    while (iLeft < left.length && iRight < right.length){
        if (cmp(left[iLeft], right[iRight]) < 0){
            result.push(left[iLeft++]);
        } else {
            result.push(right[iRight++]);
        }
    }

    return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
}
