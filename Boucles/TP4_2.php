<?php
function display($array) {
  $i = 0;
  $currentElement;
  while ($i < 10 && $i <= count($array)-1) {
    $currentElement = $array[$i];
    $i++;
    echo ($currentElement)."\n";
  }
}
$test = [12, 13, 14];
display($test);
