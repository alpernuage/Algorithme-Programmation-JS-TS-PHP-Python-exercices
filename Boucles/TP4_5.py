def oddEven(array) :
  i = 0
  while (i < len(array)):
    currentElement = array[i]
    if currentElement % 2 == 0:
      print("even")
    else :
      print("odd")
    i+=1
  return array


test = [2, 5.2, -1.3, 0, -2.5, 9.7, 8.143]
oddEven(test)
