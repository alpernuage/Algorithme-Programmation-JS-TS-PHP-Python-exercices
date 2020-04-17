def takePlus1(array) :
  i = 0
  array2 = []
  while (i < len(array)):
    currentElement = array[i]
    array2.append(currentElement + 1);
    i+=1
  return array2

test = [2, 5.2, -1.3, 0, -2.5, 9.7, 8.143]
takePlus1(test)
array2 = takePlus1(test)
print(array2)
