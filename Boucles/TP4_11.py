def occurence(array) :
    i = 0;
    array2 = [];
    presence = False;
    while i < len(array) :
        control1 = array[i];
        j = 0;
        while j < len(array2) :
            control2 = array2[j];
            if (control1 == control2) :
                presence = True;
            j+=1;
        if (presence == False) :
            array2.append(control1);
        presence = False;
        i+=1;
    return array2

test = [0, 5, 5, 4, 4, 3, 3, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6];
result = occurence(test);
print(result);
