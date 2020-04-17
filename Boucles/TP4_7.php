<?php
function oddEven($array) {
  $i = 0;
  $counter=0;
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($currentElement % 2 == 0) {
      $counter++;
    } else {}
    $i++;
  }
  echo $counter;
}

$test = [1,2,3,4,5,6,7];
oddEven($test);
