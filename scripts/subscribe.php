<?php

$email = $_POST["email"];

	if (filter_var($email, FILTER_VALIDATE_EMAIL) && strcmp($email,"student-participant@ilstu.edu")) {
    	
    	$dbh = new PDO('mysql:host=localhost;dbname=RedbirdHacks', 'emailSubscriber', 'g_$UqwJv$@xu3^c');

    	$stmt = $dbh->prepare("SELECT email_address FROM USER WHERE email_address = :email");
		$stmt->bindParam(':email', $email);

		$stmt->execute();

		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		if($row)
		{

		$dbh = null;

    		header('Location: http://redbirdhacks.org/index.html?email=valid'); // User exists, pass confirmation.
		
		}else{

		// User does not exist. Add to the database.
		$stmt = $dbh->prepare("INSERT INTO `USER` (`email_address`) VALUES (:email)");
		$stmt->bindParam(':email', $email, PDO::PARAM_STR);

		$stmt->execute(); 

		}
    	
    	$dbh = null;
		header('Location: http://redbirdhacks.org/index.html?email=valid');

	}else{

		header('Location: http://redbirdhacks.org/index.html?email=invalid');

	}

?>