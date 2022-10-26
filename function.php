<?php
$check = $_POST["check"];
$check();
function add(){
  $a=$_POST["val1"];
  $b=$_POST["val2"];
  $resut= $a+$b;
  echo $resut;
}
function sub(){
  $a=$_POST["val1"];
  $b=$_POST["val2"];
  $resut= $a-$b;
  echo $resut;
}
function mult(){
  $a=$_POST["val1"];
  $b=$_POST["val2"];
  $resut= $a*$b;
  echo $resut;
}
function div(){
  $a=$_POST["val1"];
  $b=$_POST["val2"];
  $resut= $a/$b;
  echo $resut;
}