<?php
function asc($array) {
  $i = 0;
  $previous = $array[0];
  $ascending;
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($previous > $currentElement) {
      $ascending = false;
    } elseif ($previous < $currentElement) {
      $previous = $currentElement;
      $ascending = true;
    }
    $i++;
  }
  return $ascending;
}

$test = [-1, 2, 13, 4, 5, 6, 7];
$result = asc($test);

if($result == true)
  echo "TRUE";
elseif ($result == false)
  echo "FALSE";
