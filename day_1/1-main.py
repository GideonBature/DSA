def checkMonotonic(array):
    arrayLen = len(array)
    leftPointer = 0
    rightPointer = 1

    nonIncreasing = False
    nonDecreasing = False

    for (i in range(0, arrayLen - 2):
         if (array[leftPointer] > array[rightPointer]):
            nonIncreasing = True
            leftPointer += 1
            rightPointer += 1
         elif (array[leftPointer] < array[rightPointer]):
            nonDecreasing = True
            leftPointer += 1
            rightPointer += 1

    if (nonIncreasing and nonDecreasing):
         return False
    return True


