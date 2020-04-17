<?php
function maxx($array) {
  $i = 1;
  $controlmax = $array[0];
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($controlmax < $currentElement) {
      $controlmax = $currentElement;
    }
    $i++;
  }
  return $controlmax;
}

$test = [1, 2, 3, 4, 5, 6, 7];
$result = maxx($test);
echo $result;
