<?php
function oddEven($array) {
  $i = 0;
  $currentElement;
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($currentElement % 2 == 0) {
      echo "$currentElement is even";
    } else {
      echo "$currentElement is odd";
    }
    $i++;
  }
}

$test = [2, 5.2, -1.3, 0, -2.5, 9.7, 8.143];
oddEven($test);
