<?php
function takePlus1($array) {
  $i = 0;
  $array2 = array();
  $currentElement;
  while ($i < count($array)) {
    $currentElement = $array[$i];
    array_push($array2,$currentElement);
    $i++;
  }
  return $array2;
}

$test = array(2, 5.2, -1.3, 0, -2.5, 9.7, 8.143);
takePlus1($test);
$array2 = takePlus1($test);
print_r($array2);
