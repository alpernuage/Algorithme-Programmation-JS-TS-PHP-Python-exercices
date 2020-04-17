<?php
function maxmin($array) {
  $i = 1;
  $controlmax = $array[0];
  $controlmin = $array[0];
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($controlmax < $currentElement) {
      $controlmax = $currentElement;
    }
    if ($controlmin > $currentElement) {
      $controlmin = $currentElement;
    }
    $i++;
  }
  return [$controlmax, $controlmin];
}

$test = [-1, 2, 3, 4, 5, 6, 7];
$result = maxmin($test);
print_r($result);
