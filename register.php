<?php

require_once ('app/login.php');

require_once ('scripts/registerHelper.php');

$googleClient = new Google_Client;

$auth = new GoogleAuth($googleClient);  

if($auth->checkRedirectCode()){

    $_SESSION['userPayload'] = $auth->getUserInfo();

    header('Location: register.php');

}
?>
<!doctype html>
<head>
    <title>RedbirdHacks Registration</title>
    <!-- Style -->
    <link href="styles/output.css" rel="stylesheet">
    <!-- Script -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="scripts/register.js"></script>
    <script src="scripts/notify.min.js"></script>

</head>
<?php

// If the user is not signed in, display the login link.
if(!$auth->isLoggedIn()){

?>
<a href="<?php echo $auth->getAuthUrl();?>">Sign in with google</a>
<?php

// End login link, else they are signed in already, show form
}else{

$user = getUser($_SESSION['userPayload']['id']);

?>
<a href="app/logout.php">Sign out</a>
<form id="registration">

    <h2><span class="gray">General Information</span></h2>

        <label for="firstName">First name: </label>
            <input type="text" id="firstName" name="firstName" required><br>

        <label for="lastName">Last name: </label>
            <input type="text" id="lastName" name="lastName" required><br>

        <label for="emailAddress">Email Address: </label>
            <input type="text" id="emailAddress" name="emailAddress" required><br>

        <label for="gender">Gender: </label>

        <select id="gender" name="gender" size=1 required>
            
            <option value="u">Unspecified</option>
            <option value="f">Female</option>
            <option value="m">Male</option>

        </select><br>

        <label for="school">School: </label>
            <input type="text" id="school" name="school" required><br>
            
        <label for="major">Major: </label>
            <input type="text" id="major" name="major" required><br>
        
        <label for="class">Student Classification: </label>
            <select id="class" name="studentClass" size="1" required>
                <option value="freshman">Freshman</option>
                <option value="sophomore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
                <option value="master">Master</option>
            </select><br>

        <label for="gradYear">Estimated Graduation Year: </label>
            <input type="number" id="gradYear" name="gradYear" size="4" min="2014" max="2100" required><br>

    <h2><span class="gray">Your Role in RedbirdHacks</span></h2>
  
        <label for="isHacker">I am interested in being a Hacker! </label>
            <input type="checkbox" id="isHacker" name="isHacker"><br>

        <label for="isVolunteer">I am interested in volunteering to help with the event </label>
            <input type="checkbox" id="isVolunteer" name="isVolunteer"><br>

    <h2><span class="gray">Internship Information</span></h2>
    
        <p>Upload your resume if you are interested in Internship Opprotunities (optional):</p>

        <span class="hidden" id="filename" aria-hidden="true"><p id="filename">Current Resume: </p><a href="#" id="deleteResume">Delete Resume</a></span>

        <p>Upload New Resume (2MB): <input type="file" id="file" name="file"></p>
                    
    <input type="submit" id="submit">
    
</form>
<?php
//End else
}

?>