<?php
	require_once 'app/login.php';
	$googleClient = new Google_Client;
	$auth = new GoogleAuth($googleClient);	
	($auth->checkRedirectCode())
	{
		//header('Location: index.php');
	}

?>


<!doctype html>
<html>
	<head>
		<meta charset = "utf-8">
		<title> Redbird Hacks</title>
	</head>
	<body>
		<p>Welcome to RedbirdHacks</p>
	<?php if(!$auth->isLoggedIn()): ?>
			<a href ="<?php echo $auth->getAuthUrl();?> ">Sign in with google </a>
		<?php else: ?>
			You are signed in. <a href="logout.php">Sign out</a>
		<?php endif; ?>
	</body>
</html>
