<?php
function occurence($array) {
  $i = 0;
  $j;
  $control1;
  $control2;
  $array2 = [];
  $presence = false;
  while ($i < count($array)) {
    $control1 = $array[$i];
    $j = 0;
    echo(" search " . $control1);
    while ($j < count($array2)) {
      $control2 = $array2[$j];
      if ($control1 == $control2) {
        $presence = true;
        echo(" find " . $control1);
      }
      $j++;
    }
    if ($presence==false) {
      echo(" push " . $control1);
      array_push($array2, $control1);
    }
    $presence = false;
    $i++;
  }
  return $array2;
}

$test = [0, 5, 5, 4, 4, 3, 3, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6];
$result = occurence($test);
print_r($result);
