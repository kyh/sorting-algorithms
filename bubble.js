function sort(arr){
	var swapped, i, k, temp;

	if (!arr.length || arr.length == 1) {
		return arr;
	}

	do {
		swapped = false;
		for (i = 0; i < arr.length - 1; i++) {
			k = i + 1;
			if (arr[i] > arr[k]) {
				temp = arr[i];
				arr[i] = arr[k];
				arr[k] = temp;
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
}

module.exports = sort;

var array = [1,4,5,7,2,8,3,6];
var sorted = sort(array);
console.log(sorted);