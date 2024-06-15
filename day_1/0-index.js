function sortedSquarredArray(array) {
	const newArray = new Array(array.length).fill(0);
	const len = array.length;

	const leftPointer = 0;
	const rightPointer = len - 1;

	for (let i = len - 1; i >= 0; i--) {
		let leftSquare = Math.pow(array[leftPointer], 2);
		let rightSquare = Math.pow(array[rightPointer], 2);

		if (leftSquare > rightSquare) {
			newArray[i] = leftSquare;
			leftPointer++;
		} else {
			newArray[i] = rightSquare;
			rightPointer--;
		}
	}
	return newArray;
}
