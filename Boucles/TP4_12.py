def inverse(array) :
  i = len(array)-1;
  array2 = [];
  while (i >= 0) :
    currentElement = array[i];
    print(currentElement);
    array2.append(currentElement);
    i-=1;
  return array2;

test = [1,2,3,4,5,6,7];
result = inverse(test);
print(result);
