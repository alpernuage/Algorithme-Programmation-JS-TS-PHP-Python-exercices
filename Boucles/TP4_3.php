<?php
function display($array) {
  $i = count($array) - 1;
  $currentElement;
  while ($i > (count($array) - 11) && $i >= 0) {
    $currentElement = $array[$i];
    $i = $i - 1;
    echo $currentElement."\n";
  }
}
$test = [12, 13, 14];
display($test);
