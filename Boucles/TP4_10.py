def asc(array) :
    i = 0;
    previous = array[0];
    ascending = True;
    while i < len(array) :
        currentElement = array[i];
        if (previous > currentElement) :
            ascending = False;
        elif (previous < currentElement) :
            previous = currentElement;
            ascending = True;
        i+=1;
    return ascending

test = [-1, 2, 13, 4, 5, 6, 7];
result = asc(test);
print(result);
