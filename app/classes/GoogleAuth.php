<?php

	class GoogleAuth
	{
		protected $client;
		protected $plus;

		public function __construct(Google_Client $googleClient = null)
		{
			$this->client = $googleClient;
			include_once(__DIR__ . '/../../vendor/autoloader.php');
			if($this->client)
			{
				$this->client->setClientId(CLIENTID);
				$this->client->setClientSecret(CLIENTSECRET);
				$this->client->setRedirectUri(REDIRECTURI);
				$this->client->setScopes(array('https://www.googleapis.com/auth/plus.profile.emails.read','profile'));
				$this->client->setAccessType('online');
				$this->client->setApprovalPrompt('auto');
				$this->plus = new Google_Oauth2Service($this->client);
			}
		}

		public function setOauth2Service(Google_Oauth2Service $oauth2)
		{
	
		}
		
		public function isLoggedIn()
		{
			return isset($_SESSION['access_token']);
		}
		
		public function getAuthUrl()
		{
			return $this->client->createAuthUrl();
		}
		
		public function checkRedirectCode()
		{
			if(isset($_GET['code']))
			{
				$this->client->authenticate($_GET['code']);
				
				$this->setToken($this->client->getAccessToken());
				return true;
			}
			return false;
		}
		
		public function setToken($token)
		{
			$_SESSION['access_token'] = $token;
			
			$this->client->setAccessToken($token);
		}
		
		public function logout()
		{
			//unset($_SESSION['access_token']);
			session_unset(void);
		}

		public function getUserInfo(){
			$userInfo = $this->client->verifyIdToken()->getAttributes();
			$userInfoDetailed = $this->plus->userinfo->get();
			$mergedArray = array_merge($userInfo,$userInfoDetailed);
			//return $userInfo;
			return $mergedArray;
		}
		public function getToken(){
			return $_SESSION['access_token'];
		}
		
	}
?>
