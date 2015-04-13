function sort(arr){
	var swapped;

	if (!arr.length || arr.length == 1) {
		return arr;
	}

	do {
		swapped = false;
		for (var i = 0; i < arr.length - 1; i++) {
			var j = i + 1;
			if (arr[i] > arr[j]) {
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

module.exports = sort;