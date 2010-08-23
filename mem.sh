<?php

$mem = new Memcache;
echo "I got a memcache\n";
echo "that was mem\n";
$mem->connect('localhost', 11211) or die ("Could not connect");
print_r($mem);
$ver = $mem->getVersion();
echo "Server version: " . $ver . "\n";
$tmp_object = new stdClass;
$tmp_object->str_attr = 'test';
$tmp_object->int_attr = 123;


$name = "Billy";
$mem->set("name", $name) or die("Failed to save name to memcache");
echo "Saved name.\n";
$res = $mem->get("name");
echo "The name I got from memcache was " . $res . "\n";


?>
