<?php
	class GoogleAuth
	{
		protected $client;
		protected $plus;

		public function __construct(Google_Client $googleClient = null)
		{
			$this->client = $googleClient;
			
			if($this->client)
			{
				$this->client->setClientId('1073276232790-k6imge9c82rfen4ntg1sjjvp946ns4eu.apps.googleusercontent.com');
				$this->client->setClientSecret('gjgPzGDAY80ulqw4JI0nAlCZ');
				$this->client->setRedirectUri('http://redbirdhacks.org/index.php');
				$this->client->setScopes(array('https://www.googleapis.com/auth/plus.profile.emails.read','profile'));
				$this->client->setAccessType('online');
				$this->client->setApprovalPrompt('auto');
			//	$this->plus = new Google_Oauth2Service($client);
			}
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
			unset($_SESSION['access_token']);
		}

		public function getUserInfo(){
			$userInfo = $this->client->verifyIdToken()->getAttributes();
			return $userInfo;
		}
	/*	public function getMoreUserInfo(){
			return $this->plus->userinfo;
		}
	*/	
	}
?>
