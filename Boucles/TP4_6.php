<?php
function sumArray($array) {
  $i = 0;
  $sum = 0;
  $currentElement;
  while ($i < count($array)) {
    $currentElement = $array[$i];
    $sum = $sum + $currentElement;
    $i++;
  }
  echo $sum;
  return $sum;
}

$test = [12, 13, 14];
sumArray($test);
