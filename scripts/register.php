<?php

require_once ('registerHelper.php');

require_once ('../app/login.php');

// Set our user variable
$user = getUser($_SESSION['userPayload']['id']);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if(isset($_GET['loadUser'])){

        echo json_encode(loadUser($_SESSION['userPayload']['id']));

    }

    if(isset($_GET['deleteResume'])){

        // Get all files in user directory and delete
        $files = glob('/var/www/html/resumes/'.$_SESSION['userPayload']['id'].'/*');

        // Clear out the folder
        foreach($files as $file){            
            if(is_file($file)){
                // Delete file
                unlink($file);
            }
        }

        // Delete the filename from the database.
        if(clearFilename($_SESSION['userPayload']['id'])){
            echo true;
        }else{
            echo false;
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Used to log errors.
    $error = array();

    // First let's handle the easy things
    $google_id = $_SESSION['userPayload']['id'];
    $email_address = $_POST['emailAddress'];
    $given_name = $_POST['firstName'];
    $family_name = $_POST['lastName'];
    $gender = $_POST['gender'];
    $major = $_POST['major'];
    $year = $_POST['studentClass'];
    $grad_year = $_POST['gradYear'];
    $is_volunteer = isset($_POST['isVolunteer']);
    $is_hacker = isset($_POST['isHacker']);

    // Get the school ID
    $school_id = getSchoolId($_POST['school']);
    
    // If the school provided does not exist, let's add it to the database and grab the insert ID.
    if(!$school_id){

        $school_id = addSchool($_POST['school']);
    
    }

    // If no errors with uploading the file, the file has at least 1 byte, and is less than 2MB
    if(!$_FILES['file']['error'] && $_FILES['file']['size'] && $_FILES['file']['size'] <= 2000000){

        // See if directory is already there
        // If user directory does not exist
        if (!file_exists('/var/www/html/resumes/'.$_SESSION['userPayload']['id'].'/')){
            
            // Make directory
            mkdir('/var/www/html/resumes/'.$_SESSION['userPayload']['id'].'/', 0777, true);
            
        
        }else{

            // Otherwise, get all files in directory
            $files = glob('/var/www/html/resumes/'.$_SESSION['userPayload']['id'].'/*');
            
            // Iterate through the files
            foreach($files as $file){
            
                if(is_file($file)){
                
                    // Delete file (we only want to store one resume per user).
                    unlink($file);
                
                }
            }
        }

        // Save the filename as reference and to prevent traversal attacks
        $filename = $_FILES["file"]["name"];

        // Grab extension
        $fileExtension = array_pop(explode('.', $filename));

        // Store a timestamp (this is what we will actually store in the filesystem)
        $timestamp = time();

        // Upload the file with the new filename
        move_uploaded_file($_FILES["file"]["tmp_name"],
        '/var/www/html/resumes/'.$_SESSION['userPayload']['id'].'/'.$timestamp.".".$fileExtension);

        // Make the file unviewable from prying eyes
        chmod('/var/www/html/resumes/'.$_SESSION['userPayload']['id'].'/'.$timestamp.".".$fileExtension, 0303);
    


        // If we hit the else...
    }else if($_FILES["file"]["error"]){

        // Resume was probably too large
        $error['file'] = $_FILES["file"]["error"];
        
    }

    // Store the user on file if we have one
    $user = getUser($_SESSION['userPayload']['id']);

    // If this user exists, let's update their registration.
    if($user){

        // If a new resume is not being uploaded
        if(!$filename){

            // Retain the filename on record.
            $filename = $user['filename'];

        }

        // And update their profile.
        $result = updateProfile($google_id, $email_address, $given_name, $family_name, $gender, $school_id, $major, $year, $grad_year, $is_volunteer, $is_hacker, $filename);

        // Else, if they are not on file...
    }else{

        // Create the profile.
        $result = createProfile($google_id, $email_address, $given_name, $family_name, $gender, $school_id, $major, $year, $grad_year, $is_volunteer, $is_hacker, $filename);
    }

    // Return the result with errors
    echo json_encode(array('changes' => $result, 'errors' => $error));
  
}