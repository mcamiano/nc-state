# You can code in Python

import sys

for line in sys.stdin.readlines():
  numbers = map(int,line.split())

  n=len(numbers)

  print ':)' if len(set(map(lambda pair: abs(pair[0]-pair[1]),zip(numbers, numbers[1:]))).intersection(range(n))) == n-1 else ':('

