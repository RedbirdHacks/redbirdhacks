<?php
	require_once 'app/login.php';
	
	$auth = new GoogleAuth();
	
	$auth-> logout();

	header('Location: index.php');
?>
