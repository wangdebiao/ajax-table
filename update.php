<?php
 include "db.php";
 $id=$_GET["id"];
 $gbname=$_GET["gbname"];
 $value=$_GET["value"];
 $db->query("update newtable1 set {$gbname}='{$value}' where id=".$id);
if($db->affected_rows>0){
	echo "ok";
}
?>