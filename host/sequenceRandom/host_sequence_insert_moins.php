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
$question_user_vote=$_GET['question_user_vote'];
$controlleur = 'quedal';

// Recupere des donnees de la question
$requete = "SELECT table_questions.question_plus, table_questions.question_moins FROM table_questions WHERE table_questions.question_id='$question_id'";
$reponse = $bdd->query($requete);

while ($donnees = $reponse->fetch()) {

	$requeteControl = "SELECT table_votes.question_id, table_votes.question_user_vote FROM table_votes WHERE table_votes.question_id='$question_id' AND table_votes.question_user_vote='$question_user_vote'";
	$reponseControl = $bdd->query($requeteControl);
	
	while ($donneesControl = $reponseControl->fetch()) {
		$controlleur = 'je_recois';
		echo '<br>'.$donneesControl['question_id'].''.$donneesControl['question_user_vote'].'<br><br>';
	}
	if ($controlleur == 'quedal') {
			// INIT 
			$question_moins = $donnees['question_moins'];
			$question_plus = $donnees['question_plus'];

			$question_moins = $question_moins + 1;
			$nb_vote = $question_moins+$question_plus;
	
			///////////////////////////////////////////////////
			// SEND VOTE
			$query.="UPDATE table_questions SET question_moins='$question_moins', question_nb_vote='$nb_vote' WHERE table_questions.question_id='$question_id';";
			// CONTROL SEND
			$query .= "INSERT INTO table_votes (question_id, question_user_vote) VALUES ('$question_id','$question_user_vote')";
			///////////////////////////////////////////////////
			// SEND QUERY
			mysqli_multi_query($conn, $query) or die("MySQL Error: " . mysqli_error($conn) . "<hr>\nQuery: $query");
			///////////////////////////////////////////////////
	} else if($controlleur == 'je_recois'){
	    // TU NE PEUX PAS VOTER
	}
}
?>