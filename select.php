<?php
include "db.php";
$result=$db->query("select * from newtable1");
$array=array();
while($row=$result->fetch_assoc()){
    $array[]=$row;
};
echo json_encode($array);
?>