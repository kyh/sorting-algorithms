function selectionsort(arr){
	if (!arr.length || arr.length == 1) {
		return arr;
	}
	for (var i = 0; i < arr.length - 1; i++) {
		var iMin = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[iMin]) {
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

module.exports = selectionsort;