<?php
	include "db.php";
	$db->query("insert into newtable1 (name,age) values ('','')");
	if($db->affected_rows>0){
		echo $db->insert_id;
	};
?>