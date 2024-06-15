const checkMonotonic = function (array) {
	const len = array.length;
	let leftPointer = 0;
	let rightPointer = 1;

	let nonIncreasing, nonDecreasing = false;

	for (let i = 0; i < len - 2; i++) {
		if (array[leftPointer] < array[rightPointer]) {
			nonDecreasing = true;
			leftPointer++;
			rightPointer++;
		} else if (array[leftPointer] > array[rightPointer]) {
			nonIncreasing = true;
			leftPointer++;
			rightPointer++;
		}
	}

	if (nonIncreasing && nonDecreasing) return false;
	
	return true;
}
