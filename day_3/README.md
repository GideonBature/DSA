# Day 3 Goals

Welcome to Day 3 of the DSA Coding Challenge!

## Today's Goals (Recursion Continued):

### Question 1: Tower of Hanoi

We have three rods and `N` disks. The objective of the puzzle is to move the entire stack to another rod. Initially, these discs are on rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, find & return the total moves.

**Note**: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered `N`. Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. You can only move 1 disk at a time.

### Question 2: Power Sum

Let’s define a peculiar type of array in which each element is either an integer or another peculiar array. Assume that a peculiar array is never empty. Write a function that will take a peculiar array as its input and find the sum of its elements. If an array is an element in the peculiar array you have to convert it to its equivalent value so that you can sum it with the other elements. The equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is.

For example:
- `[2, 3, [4, 1, 2]]` = `2 + 3 + (4 + 1 + 2)^2`
- `[1, 2, [7, [3, 4], 2]]` = `1 + 2 + (7 + (3 + 4)^3 + 2)^2`

All the best!
