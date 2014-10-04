<?php
	require_once '../app/login.php';
	$googleClient = new Google_Client;
	$auth = new GoogleAuth($googleClient);	
	if($auth->checkRedirectCode())
	{
		header('Location: index.php');
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
	<?php if(!$auth->isLoggedIn()) ?>
			<a href ="<?php echo $auth->getAuthUrl();?> ">Sign in with google </a>
		<?php else: ?>
			You are signed in. <a href="logout.php">Sign out</a>
			<p>Here is some information about your Google Account:</p>
			<pre><?php print_r($auth->getUserInfo()); ?></pre>
		<?php endif; ?>
	</body>
</html>
