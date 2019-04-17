<?php
 $host='127.0.0.1';
$username='root';
$password='';
if ($conn=mysqli_connect($host,$username,$password)) {
	echo "success!";
	# code...
} else {
    echo "failed";
	# code...
}
$select=mysqli_select_db($conn,'information');
if ($select) {
	 echo "success!";
} else {
	echo "failed!";
}
    $cr="create table ps(
    
_order varchar(30),
_name varchar(30),
_password  varchar(30)
    )";
$cs=mysqli_query($conn,$cr);
if ($cs){
        echo "success!";
    }
    else{
        echo "failed!";
    
    }
    $in=mysqli_query($conn,"insert into ps values('1','甲','1234567')");
    if($in){
        echo "success!";
    }
    else{
        "failed!";
    }
    ?>

