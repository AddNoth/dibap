<?php
include "../db.php";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Définis l'id de la question
$question_id=$_GET['question_id'];
//$question_id=1;
//echo "La question a pour ID : ".$question_id."<br>";

// Recupere des donnees de la question
$requete = "SELECT table_questions.question_switch FROM table_questions WHERE table_questions.question_id='$question_id'";
$reponse = $bdd->query($requete);

while ($donnees = $reponse->fetch()) {
	// INIT 
	$question_switch = $donnees['question_switch'];

	// Calculs
	//$question_plus=$_GET['question_plus'];
	$question_switch = $question_switch + 1;

	//echo "Voici le resultat après calcul ===> Vote pour : ".$question_plus." --- Vote contre : ".$question_moins." ---  Et le nombre de votant : ".$nb_vote."<br>";
	$sql="UPDATE table_questions SET question_switch='$question_switch' WHERE table_questions.question_id='$question_id'";

	if ($conn->query($sql) === TRUE) {
	   //echo "</br>Le projet ajout<br/>";
	}else {
	    //echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
?>