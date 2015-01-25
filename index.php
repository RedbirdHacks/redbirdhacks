<?php

require_once ('app/login.php');

require_once ('app/password.php');

require_once ('scripts/registerHelper.php');

$googleClient = new Google_Client;

$auth = new GoogleAuth($googleClient);  

if($auth->checkRedirectCode()){

    $_SESSION['userPayload'] = $auth->getUserInfo();

    header('Location: index.php#registration');

}
?>
<!doctype html>
<head>
	<title>RedbirdHacks</title>
	<!-- Style -->
	<link href="styles/output.css" rel="stylesheet">
	<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
	<!-- Script -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
	<script src="scripts/parallax.js"></script>
	<script src="scripts/notify.min.js"></script>
	<script src="scripts/email.js"></script>
	<script src="scripts/register.js"></script>
	<script src="scripts/scrollHint.js"></script>
</head>
<body>
	<section id="hero" data-type="background" data-speed="10">
		<article>
			<h1><span class="red">Redbird</span><span class="gray">Hacks</span></h1>
			<p class="subhead">Illinois State's first university hackathon.</p>
			<form id="email" action="scripts/subscribe.php" method="POST">
			<p class="disclaim-signup">Coming Spring 2015. Stay updated.</p>
			<input type="email" id="address" name="email" value="student-participant@ilstu.edu" required></input><button class="btn-style" type="submit" value="submit">Submit</button>
			</form>
	<!--<p style="margin-top: 40px;"><a href="#contact" class="email">Stay Updated</a></p>-->
	<!--<p style="margin-top: 40px;"><a href="#register" class="register">Register</a></p>-->

		</article>
	</section>
	
	<div id="scrollHint">
		
		<a id="scrollHintLink" href="#registration"><img src="images/scrollDown.png" alt="scroll down" /></a>

	</div>

<!--
	<h2 id="faqs">Be the first to participate</h2>
	<section class="faqs">

	</section>
-->
	<a name="registration"><h2 id="registration">Registration</h2></a>
	<section class="registration">
	    <?php
	    	// If the user is not signed in, display the login link.
	        if(!$auth->isLoggedIn()){
		?>
    <h3>Register for RedbirdHacks using your Google account.</h3>
    <p style="text-align:center;">
    	<a href="<?php echo $auth->getAuthUrl();?>"><img src="images/googlesignin.png"></a></p>
    	<?php 
    		// End login link, else they are signed in already, show form
            }else{

            $user = getUser($_SESSION['userPayload']['id']);
        ?>
    <a href="app/logout.php">Sign out</a>
            <form id="registerForm">
				<div style="width:100%; display:inline-block; margin:0px auto;">
                <h2><span class="gray">Personal</span></h2>
                    <label for="firstName" class="left">First name: </label>
                        <input type="text" id="firstName" class="right" name="firstName" required><br>

                    <label for="lastName" class="left">Last name: </label>
                        <input type="text" id="lastName" class="right" name="lastName" required><br>

                    <label for="emailAddress" class="left">Email Address: </label>
                        <input type="text" id="emailAddress" class="right" name="emailAddress" required><br>

                    <label for="gender" class="left">Gender: </label>

                    <select id="gender" name="gender" class="right" size=1 required>
                        
                        <option value="u">Unspecified</option>
                        <option value="f">Female</option>
                        <option value="m">Male</option>

                    </select><br>

                    <label for="school" class="left">School: </label>
                        <input type="text" id="school" class="right" name="school" required><br>
                        
                    <label for="major" class="left">Major: </label>
                        <input type="text" id="major" name="major" class="right" required><br>
                    
                    <label for="class" class="left">Student Classification: </label>
                        <select id="class" class="right" name="studentClass" size="1" required>
                            <option value="freshman">Freshman</option>
                            <option value="sophomore">Sophomore</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                            <option value="graduate">Graduate</option>
                        </select><br>

                    <label for="gradYear" class="left">Estimated Graduation Year: </label>
                        <input type="number" id="gradYear" name="gradYear" class="right" size="4" min="2014" max="2100" required><br>
				
					<label for="linkedIn" class="left">LinkedIn Address: </label>
                    <input type="text" id="linkedIn" name="linkedIn" class="right" placeholder="https://www.linkedin.com/in/reidhoffman" required><br>

                    <label for="GitHub" class="left">GitHub Address: </label>
                    <input type="text" id="gitHub" name="gitHub" class="right" placeholder="https://github.com/defunkt" required><br>

				</div>
                
                <h2><span class="gray">Resume</span></h2>  
 
                    <span id="filename" class="hidden" aria-hidden="true"><label for="filename" class="left">Previously Uploaded: </label><p id="filename" class="right" style="margin-top:10px"> <a href="#" id="deleteResume">Delete</a></p></span>
 
                    <label for="newResume" class="left">Upload New Resume (2MB): </label><input style="margin-top:10px;" class="right" type="file" id="file" name="file"></p>
                                
                <label for="spacer" class="left"></label><input class="right" type="submit" id="submit">
            </form>
    			<?php
    				//End else
        			}
            	?>
        <span class="left">&nbsp;</span>
    </section>
	<a name="FAQ"><h2 id="faqs">FAQs</h2></a>
	<section class="faqs">
		<div class="row">
			<div class="col33">
				<h3>What is RedbirdHacks?</h3>
				<p>RedbirdHacks is ISU's first hackathon for students across departments and majors to prototype, program, and pitch their ideas to corporate sponsors in an entrepreneurial fashion, cultivating innovation and collaboration to empower all students.</p>
			</div>
			<div class="col33">
				<h3>What is a hackathon?</h3>
				<p>Hackathons are 24-36 hour programming competitions where students prototype their ideas and pitch them to corporate sponsors in an entrepreneurial fashion. Hackathons began in the mid 2000s as ways to quickly develop software ideas for corporations and venture capitalists and quickly branched to create university hackathons.</p>
			</div>
			<div class="col33">
				<h3>What can I make?</h3>
				<p>Anything you can come up with! You have 36 hours to make anything from websites, desktop apps, mobile apps, or even traditional software.  All coding must be done during the hackathon, but feel free to use APIs and open source libraries. If you hack it, we will judge it based on creativity, technical difficulty, usefulness, and overall awesomeness.<p/>
			</div>
		</div>
		<div class="row">
			<div class="col33">
				<h3>What skills do I need to attend?</h3>
				<p>Students of all majors are welcome regardless of skills. Just come with your creativity and a willingness to learn something new!</p>
			</div>
			<div class="col33">
				<h3>Who can participate?</h3>
				<p>Undergraduate and graduate students from any accredited college or university are welcome. Non-ISU students must be 18 or older. If you do not fit into either of these categories, feel free to contact us!</p>
			</div>
			<div class="col33">
				<h3>How do I get into RedbirdHacks?</h3>
				<p>Simply sign up with your email above, and we'll let you know when registration opens!</p>
			</div>
		</div>
		<div class="row">
			<div class="col33">
				<h3>What should I bring?</h3>
				<p>Yourself, student ID for admission, hack gear (don't forget your chargers!), and any other items you would need within a 36 hour time frame. Bring your pillow if you're weak.</p>
			</div>
			<div class="col33">
				<h3>What are the team sizes? Can I hack alone?</h3>
				<p>You can work alone but, we highly encourage you to build with a team. (It's more fun that way!) Teams should be at most 4 people, and we can help you find other smart people to team up with!</p>
			</div>
			<div class="col33">
				<h3>How much does it cost?</h3>
				<p>Admission is free. We will provide your Wi-Fi, meals, caffeine, swag, and workspace for the entire weekend. Yes, it's awesome. We know.</p>
			</div>
		</div>
		<div class="row">
			<div class="col33">
				<h3>What are the rules?</h3>
				<p>No alcohol, no weapons or firearms, and no bad attitudes. Check out our Code of Conduct for event policies.</p>
			</div>
			<div class="col33">
				<h3>Can I check out the event without participating?</h3>
				<p>In order to make RedbirdHacks an amazing experience, each attendee must play a role in making it so! If you're a student interested in attending RedbirdHacks, please consider becoming a participant, a volunteer, or both! It'll be fun - we promise!</p>
			</div>
			<div class="col33">
				<h3>What if I have another question?</h3>
				<p>Feel free to email us at <a href="mailto:redbirdhacks@ilstu.edu">redbirdhacks@ilstu.edu</a>!</p>
			</div>
		</div>
	</section>

	<div id="sponsors" class="center">
		<h2>Interested in Sponsoring?</h2>
		<p>We need your help! Please contact us at <a href="mailto:redbirdhacks@ilstu.edu">redbirdhacks@ilstu.edu</a></p>
		<img src="//upload.wikimedia.org/wikipedia/en/f/f9/Illinois_State_University_Seal.png" alt="Illinois State University Logo">
	</div>

<!--
	<section id="contact" data-type="background" data-speed="10">
		<article class="transparent">
			<h2>Contact Us</h2>
			<form id="contact-form">
				
			</form>
		</article>
	</section>
	

	<footer>
			<p>Contact Us <a href="mailto:redbirdhacks@ilstu.edu">redbirdhacks@ilstu.edu</a></p>
	</footer>

-->

</body>
</html>
