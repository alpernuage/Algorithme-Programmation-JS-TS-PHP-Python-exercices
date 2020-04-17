<?php
function inverse($array) {
  $i = count($array)-1;
  $currentElement;
  $array2 = [];
  while ($i >= 0) {
    $currentElement = $array[$i];
    echo($currentElement);
    array_push($array2, $currentElement);
    $i--;
  }
  return $array2;
}

$test = [1,2,3,4,5,6,7];
$result = inverse($test);
print_r($result);
