var should = require('should');
var bubblesort = require('../src/bubble');
var selectionsort = require('../src/selection');

function _makeRandomArray() {
	var precision = 2;
	var multiplier = 100;
	var size = 100;
	var result = [];

	for (var i = size; i > 0; i -= 1) {
		result.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
	}

	return result;
}

function test(sortType) {

	it('should work with an empty array', function(){
		sortType([]).should.eql([]);
	});

	it('should work with (ascending) sorted arrays', function() {
		sortType([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]).should.eql([1, 1, 2, 3, 4, 4, 5, 5, 6, 9]);
		sortType([9, 2, 8, 6, 1, 3]).should.eql([1, 2, 3, 6, 8, 9]);
		sortType([5, 2, 2, 6, 1, 3]).should.eql([1, 2, 2, 3, 5, 6]);
		sortType([5, 2, 4, 6, 1, 3]).should.eql([1, 2, 3, 4, 5, 6]);
		sortType([0, 0, 0, 0, 0, -1]).should.eql([-1, 0, 0, 0, 0, 0]);
	});

}

describe('bubblesort module', function(){
	test(bubblesort);
});
describe('selection sort module', function(){
	test(selectionsort);
});