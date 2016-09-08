<?php
 header("Access-Control-Allow-Origin: *");
 //header("Content-Type: text/json");
 /*
 mysql_connect("mysql.hostinger.fr","u370502668_user","AwaybookandblogAW1302");
 mysql_select_db("u370502668_db");
 */
$dsn = 'mysql:host=mysql.hostinger.fr;dbname=u986846035_db';
$username = 'u986846035_user';
$password = 'u986846035A1dibap';
$dbname = 'u986846035_db';
$servername = 'mysql.hostinger.fr';

$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);

try{
	
	$bdd = new PDO($dsn, $username, $password, $options);
	//echo "HELLO I'M CONNECTED ON THE DATABASE !";
}

catch (Exception $e) {
	die('Erreur : ' . $e->getMessage()); 
}

?>
