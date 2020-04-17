 def checkUniqueness(myArray) :
    i = 0;
    array2 = [];
    presence = False;
    while i < len(myArray) :
        currentElement1 = myArray[i];
        j = 0;
        while j < len(array2) :
            currentElement2 = array2[j];
            if (currentElement1 == currentElement2) :
                presence = True;
                array2.append(currentElement1);
            j+=1;
        presence = False;
        i+=1;
    return array2

test = ["Aulopiformes", "Aulopiformes", "Synodus", "Synodus", "saurus"];
result = checkUniqueness(test);
print(result);
