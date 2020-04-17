<?php
// create function to get total times of number
function totalNumber($array,$myInteger) {
  $i = 0;
  $currentElement;
  $array2 = [];
  $total = count($array2);
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($currentElement == $myInteger) {
      array_push($array2, $currentElement);
    }
    $i++;
  }
  return $total;
}

$test = [2, 2, -1, 0, -2, 7, 8];
totalNumber($test,2);
