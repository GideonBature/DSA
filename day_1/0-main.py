def sortedSquarredArray(array):
    newArray = [0 for _ in range(len(array))]
    arrayLen = len(array)
    leftPointer = 0
    rightPointer = arrayLen - 1

    for i in range(arrayLen - 1, -1, -1):
        leftSquared = array[leftPointer] * array[leftPointer]
        rightSquared = array[rightPointer] * array[rightPointer]

        if (leftSquared > rightSquared):
            newArray[i] = leftSquared
            leftPointer += 1
        else:
            newArray[i] = rightSquared
            rightPointer -= 1

    return newArray
