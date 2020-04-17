def max(array) :
    i = 1;
    controlmax = array[0];
    while i < len(array) :
        currentElement = array[i];
        if (controlmax < currentElement) :
            controlmax = currentElement;
        i+=1;
    return controlmax

test = [1, 2, 3, 4, 5, 6, 7];
result = max(test);
print(result);
