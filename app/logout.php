<?php
	require_once 'login.php';
	
	$auth = new GoogleAuth();
	
	$auth->logout();

	header('Location: ../');
?>
