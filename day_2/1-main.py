#!/usr/bin/python3
"""Code
"""

def findTheWinner(n, k):
    if n == 1 return 1

    return (findTheWinner(n - 1, k) + k - 1) % n + 1
