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
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RedbirdHacks</title>
    <!-- Favicon -->
    <!-- <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon"> -->
		<link rel="icon" type="image/png" href="images/favicon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="images/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="images/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    <link rel="manifest" href="images/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Bootstrap -->
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
    <link href="styles/output.css" rel="stylesheet">
    <link href="styles/home.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- Analytics -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-59457862-1', 'auto');
      ga('send', 'pageview');
    </script>
  </head>
  <body>
  <!-- Facebook Plugin script -->
  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1608961292671716&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
  <!-- Twitter Plugin script -->
  <script>window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));</script>

  <!-- Navigation -->
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button> -->
      <a class="navbar-brand"><span class="red" style="font-size: 20px;">Redbird<span style="color: #222;">Hacks</span></span></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#about">About</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#sponsor">Sponsor</a></li>
        <li><a href="mailto:contact@redbirdhacks.org">Contact</a></li>
      </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

	<section id="hero" class="jumbotron" data-type="background" data-speed="10">
		<article>
  	<div class="container">
    		<div class="main">
          <img src="images/redbirdhacks-logo-smooth.png" alt="Redbird Hacks logo">
          <section id="social">
          <!-- Facebook Like Button -->
          <table style="margin-left: auto; margin-right: auto; margin-top: 10px;">
            <tr>
              <td>
              <div class="fb-like"
                data-href="https://www.facebook.com/RedbirdHacks" 
                data-layout="button_count" 
                data-action="like" 
                data-show-faces="false" 
                data-share="false">
              </div>
              </td>
              <td>
              <!-- Twitter Follow Button -->
              <div><a class="twitter-follow-button"
                href="https://twitter.com/redbirdhacks"
                data-show-screen-name="false"
                data-show-count="true"
                data-lang="en">
                RedbirdHacks
              </a></div>
              </td>
            </tr>
          </table>
          <h4>April 24-26 &ndash; CVA 110</h4>
          </section>
        </div>
  	</div>
  	</article>
	</section>
<?php
  // If the user is not signed in, display the login link.
  if(!$auth->isLoggedIn()){
?>
  <!-- Login Button -->
  <section id="register">
    <h2>Register</h2>
    <div style="text-align: center;">
      <a href="<?php echo $auth->getAuthUrl();?>"><img src="images/googlesignin.png" alt="Google sign in"></a>
    </div>
  </section>
<?php 
  // End login link, else they are signed in already, show form
  }else{
    $user = getUser($_SESSION['userPayload']['id']);
?>
  <!-- Registration Form -->
  <section id="register">
        <form id="registerForm">
          <div style="width:100%; display:inline-block; margin:0px auto;">
                <h2><span class="gray">Register</span></h2>
                    <label for="firstName" class="left">First name: </label>
                        <input type="text" id="firstName" class="right" name="firstName" required><br>

                    <label for="lastName" class="left">Last name: </label>
                        <input type="text" id="lastName" class="right" name="lastName" required><br>

                    <label for="emailAddress" class="left">Email Address: </label>
                        <input type="text" id="emailAddress" class="right" name="emailAddress" required><br>

                    <label for="phoneNumber" class="left">Phone Number: </label>
                        <input type="text" id="phoneNumber" class="right" name="phoneNumber" maxlength="20" required><br>

                    <label for="gender" class="left">Gender: </label>

                    <select id="gender" name="gender" class="right" size=1 required>
                        
                        <option value="u">Unspecified</option>
                        <option value="f">Female</option>
                        <option value="m">Male</option>

                    </select><br>

                    <label for="school" class="left">School: </label>
                        <input type="text" id="school" class="right" name="school" required><br>
                        
                    <label for="major" class="left">Major: </label>
                        <input type="text" id="major" name="major" class="right" placeholder="Undeclared" required><br>
                    
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
        
          <label for="linkedIn" class="left">*LinkedIn Address: </label>
                    <input type="text" id="linkedIn" name="linkedIn" class="right" placeholder="https://www.linkedin.com/in/reidhoffman"><br>

                    <label for="GitHub" class="left">*GitHub Address: </label>
                    <input type="text" id="gitHub" name="gitHub" class="right" placeholder="https://github.com/defunkt"><br>

        </div>

                    <span id="filename" class="hidden" aria-hidden="true"><label for="filename" class="left">Previously Uploaded: </label>
                    <p id="filename" class="right" style="margin-top:10px"> <a href="#" id="deleteResume">Delete</a></p></span>
 
                    <label for="newResume" class="left">*Upload New Resume (2MB): </label>
                    <input style="margin-top:10px;" class="right" type="file" id="file" name="file">

                  
                    <p class="center" style="display: block; width: 25%; margin-left: auto; margin-right: auto;">*Optional information will be supplied to recruiters for potential job and internship opportunities.</p>
                    <p class="center" style="display: block; width: 25%; margin-left: auto; margin-right: auto;">Unfortunately, we are unable to offer travel reimbursement for this year.</p>

                    <!-- <input type="submit" id="submit" style="margin-left: auto; margin-right:auto;"> -->

                    <div style="margin-left: auto; margin-right: auto; width: 100%; display: block; text-align: center;">
                      <button type="submit" id="submit" class="btn btn-primary" style="width: 11%; margin-left: 32px;">Submit</button>
                      <button type="button" id="signOut" class="btn btn-primary" style="width: 11%;">Sign Out</button>
                    </div>
            </form>
  </section>
<?php
  //End else (register form)
  }
?>
	<section id="about">
  <h2>About</h2>
	<!-- Grid System -->
	<div class="container">
	    <div class="row grid">
	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>What is RedbirdHacks?</h3>
            <p>RedbirdHacks is Illinois State University's first hackathon for students across departments and majors to prototype, program, and pitch their ideas to corporate sponsors in an entrepreneurial fashion, cultivating innovation and collaboration to empower all students.</p>
          </div>

	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>What is a hackathon?</h3>
				    <p>Hackathons are 24-36 hour programming competitions. Hackathons began in the mid 2000s as ways to quickly develop software ideas for corporations and venture capitalists and quickly branched to create university hackathons.</p>
          </div>

	        <div class="clearfix visible-sm-block"></div>

	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>When and where is RedbirdHacks?</h3>
            <p>The weekend of April 24th-26th located on Illinois State University's campus, CVA 110. Accepted applicants will be notified in April.</p>
          </div>

	        <div class="clearfix visible-md-block"></div>

	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>What skills do I need to attend?</h3>
				    <p>Students of all majors are welcome regardless of skills. Just come with your creativity and a willingness to learn something new!</p>
          </div>

	        <div class="clearfix visible-sm-block"></div>

	        <div class="clearfix visible-lg-block"></div>

	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>Who can participate?</h3>
				    <p>Undergraduate and graduate students from any accredited college or university are welcome. Non-ISU students must be 18 or older. If you do not fit into either of these categories, feel free to contact us!</p>
          </div>

	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>How do I get into RedbirdHacks?</h3>
				    <p>Register to participate and applicants will be notified of their acceptance in early April. Because space is limited, we will be notifying participants for RSVP and waitlist status. <b>Unfortunately, we are unable to offer travel reimbursement for this year.</b> Keep a look out for next year's event!</p>
          </div>

	        <div class="clearfix visible-sm-block"></div>
	        <div class="clearfix visible-md-block"></div>
	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>What should I bring?</h3>
				    <p>Yourself, student ID for admission, hack gear (don't forget your chargers!), and any other items you would need within a 36 hour time frame. Bring your pillow if you're weak.</p>
          </div>
	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>What are the team sizes? Can I hack alone?</h3>
				    <p>You can work alone but, we highly encourage you to build with a team. (It's more fun that way!) Teams should be at most 4 people, and we can help you find other smart people to team up with!</p>
          </div>
	        <div class="clearfix visible-sm-block"></div>
	        <div class="clearfix visible-lg-block"></div>
	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>How much does it cost?</h3>
				    <p>Admission is free. We will provide your WiFi, meals, caffeine, swag, and workspace for the entire weekend. Yes, it's awesome. We know.</p>
          </div>
	        <div class="clearfix visible-md-block"></div>
	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>What are the rules?</h3>
				    <p>No alcohol, no weapons or firearms, and no bad attitudes.</p>
          </div>
	        <div class="clearfix visible-sm-block"></div>
	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>Can I check out the event without participating?</h3>
				    <p>In order to make RedbirdHacks an amazing experience, each attendee must play a role in making it so! If you're a student interested in attending RedbirdHacks, please consider becoming a participant, a volunteer, or both! It'll be fun - we promise!</p>
          </div>
	        <div class="col-sm-6 col-md-4 col-lg-3">
            <h3>What can I make?</h3>
              <p>Anything you can come up with! You have 36 hours to make anything from websites, desktop apps, mobile apps, or even traditional software.  All coding must be done during the hackathon, but feel free to use APIs and open source libraries. If you hack it, we will judge it based on creativity, technical difficulty, usefulness, and overall awesomeness.<p/>
          </div>
	    </div>
	</div>
  </section>

  <section id="sponsor">
    <h2>Thank you to our sponsors!</h2>
    <h3>Interested in sponsoring? Check out our <a href="sponsor.pdf">sponsorship opportunities</a>.</h3>
    <!-- Grid System -->
    <div class="table" style="box-sizing: border-box;">
        <div class="row grid" style="box-sizing: inherit;">
          <div class="row">
            <div class="col-md-6"><a href="https://mlh.io/"><img src="images/mlh.png" alt="Major League Hacking"></a></div>
            <div class="col-md-6"><a href="http://business.illinoisstate.edu/means/"><img src="images/meanscenter.png" alt="The Means Center for Entrepreneurial Studies"></a></div>
          </div>
        
          <div class="row">
            <div class="col-md-6"><a href="http://it.illinoisstate.edu/"><img src="images/schoolofit.png" alt="School of IT"></a></div>
            <div class="col-md-6"><a href="http://cast.illinoisstate.edu/"><img src="images/cast.png" alt="CAST"></a></div>
          </div>
          <div class="row">
            <div class="col-md-6"><a href="http://business.illinoisstate.edu/katie/"><img src="images/katieschool.png" alt="Katie School"></a></div>
            <div class="col-md-6"><a href="http://cemast.illinoisstate.edu/"><img src="images/cemast.png" alt="Center for Mathematics, Science, and Technology"></a></div>
          </div>
        </div>
    </div>
  </section>

  <div class="modal fade" id="success" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="successLabel">Get ready to celebrate!</h3>
      </div>
      <div class="modal-body">
        <p>We have successfully received your application for RedbirdHacks!<br>
        Because of limited space, accepted applicants will be notified in April.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
  </div>

  <footer>
    &copy; RedbirdHacks 2015. Co-Hosted by <a href="http://business.illinoisstate.edu/means/">The Means Center for Entrepreneurial Studies</a>.
  </footer>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="scripts/parallax.js"></script>
		<script src="scripts/notify.min.js"></script>
		<script src="scripts/email.js"></script>
		<script src="scripts/register.js"></script>
    <script src="scripts/scrollHint.js"></script>


  </body>
</html>