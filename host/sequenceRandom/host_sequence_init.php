<?php
	include "../db.php";
	//$q="SELECT * FROM course_details";

	// NUMERO DE SEQUENCE
	$num_sequence = rand(1,2); // = sequence_id // DYNAMIC
	//$num_sequence = 1;
	$num_question = 1;
	// REQUETE TESTÉ PHPMYADMIN
	$q="SELECT table_questions.question_id, table_questions.question_titre, table_questions.question_categorie, table_questions.question_plus, table_questions.question_moins, table_questions.question_moins, table_questions.question_nb_vote, table_sequences.sequence_id, table_sequences.sequence_question_id, table_sequences.sequence_iteration FROM table_questions, table_sequences WHERE table_sequences.sequence_id = '$num_sequence' AND table_questions.question_id = table_sequences.sequence_question_id AND table_sequences.sequence_iteration='$num_question' ORDER BY table_sequences.sequence_iteration ASC";
	$reponse = $bdd->query($q);

	/*** CONTROLLEUR ***/
	//while ($donnees = $reponse->fetch()) {
	//	echo '<strong>Question id : </strong>'.$donnees['question_id'].' ---  <strong>Titre : </strong>'.utf8_decode($donnees['question_titre']).' --- <strong> Vote : </strong>| PLUS | '.$donnees['question_plus'].' | & | MOINS | '.$donnees['question_moins'].' |<br>';
	//}
	$data = array();
	echo json_encode($reponse->fetchAll());
?>