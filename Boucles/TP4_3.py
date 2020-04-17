def display(array):
    i=len(array)-1
    while (i > (len(array) - 11) and i >= 0) :
        currentElement = array[i]
        i = i - 1
        print(currentElement)
    return array

test = [12, 13, 14]
display(test)
