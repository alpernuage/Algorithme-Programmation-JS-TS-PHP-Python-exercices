def oddEven(array) :
    i = 0;
    counter=0;
    while i < len(array):
        currentElement = array[i];
        if (currentElement % 2 == 0):
            counter+=1;
        i+=1;
    return counter


test = [1,2,3,4,5,6,7,8];
result = oddEven(test);
print(result)
