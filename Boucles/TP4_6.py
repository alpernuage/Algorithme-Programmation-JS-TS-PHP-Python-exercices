def sumArray(array) :
  i = 0;
  sum = 0;
  while (i < len(array)) :
    currentElement = array[i];
    sum = sum + currentElement
    i+=1;

  print(sum);
  return sum;


test = [12, 13, 14];
sumArray(test)
