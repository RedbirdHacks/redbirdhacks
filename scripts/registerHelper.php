<?php

require_once ('password.php');

function getUser($google_id){

    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
    

        $stmt=$dbh->prepare("SELECT * FROM PROFILE WHERE google_id = :google_id");
        $stmt->bindParam(":google_id", $google_id);
        $stmt->execute();

        $row = $stmt->fetch();

    } catch (PDOException $e) {
        echo "Connection failed";
    }

    return $row;

}

function loadUser($google_id){

    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt=$dbh->prepare("SELECT pro.email_address, pro.given_name, pro.family_name,
        pro.gender, pro.school_id, pro.major, pro.year, pro.grad_year, pro.is_volunteer,
        pro.is_hacker, pro.filename, sch.school_name
        FROM PROFILE AS pro
            LEFT JOIN SCHOOL AS sch
            ON (pro.school_id = sch.school_id)
        WHERE google_id = :google_id");
        $stmt->bindParam(":google_id", $google_id);
        $stmt->execute();

        $row = $stmt->fetch();

    } catch (PDOException $e) {
        echo "Connection failed";
    }

    if($row){
        return $row;
    }else{
        // Build a temporary user if they aren't registered
        $user = array('given_name' => $_SESSION['userPayload']['given_name'],
        'family_name' => $_SESSION['userPayload']['family_name'],
        'email_address' => $_SESSION['userPayload']['payload']['email']);

        return $user;
    }

}

function getSchoolName($school_id){

    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
    

        $stmt=$dbh->prepare("SELECT school_name FROM SCHOOL WHERE school_id = :school_id");
        $stmt->bindParam(":school_id", $school_id);
        $stmt->execute();

        $row = $stmt->fetch();
    
    } catch (PDOException $e) {
        echo "Connection failed";
    }

    return $row['school_name'];

}

function getSchoolId($school_name){

    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
    

        $stmt=$dbh->prepare("SELECT school_id FROM SCHOOL WHERE school_name = :school_name");
        $stmt->bindParam(":school_name", $school_name);
        $stmt->execute();

        $row = $stmt->fetch();


    } catch (PDOException $e) {
        echo "Connection failed";
    }

    return $row['school_id'];

}

function addSchool($school_name){

    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
    

        $stmt = $dbh->prepare("INSERT INTO SCHOOL (school_name) 
        VALUES(:school_name)");
        $stmt->bindParam(':school_name', $school_name);  
        $stmt->execute();

        $row = $dbh->lastInsertId();

    } catch (PDOException $e) {
        echo "Connection failed";
    }

    return $row;
}

function updateProfile($google_id, $email_address, $given_name, $family_name, $gender, $school_id, $major, $year, $grad_year, $is_volunteer, $is_hacker, $filename){

    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
    

        $stmt = $dbh->prepare("UPDATE PROFILE
        SET email_address=:email_address, given_name=:given_name, family_name=:family_name,
        gender=:gender, school_id=:school_id, major=:major, year=:year, grad_year=:grad_year,
        is_volunteer=:is_volunteer, is_hacker=:is_hacker, filename=:filename
        WHERE google_id=:google_id");

        $stmt->bindParam(':google_id', $google_id);
        $stmt->bindParam(':email_address', $email_address);
        $stmt->bindParam(':given_name', $given_name);
        $stmt->bindParam(':family_name', $family_name);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':school_id', $school_id);
        $stmt->bindParam(':major', $major);
        $stmt->bindParam(':year', $year);
        $stmt->bindParam(':grad_year', $grad_year);
        $stmt->bindParam(':is_volunteer', $is_volunteer);
        $stmt->bindParam(':is_hacker', $is_hacker);
        $stmt->bindParam(':filename', $filename);   
        $stmt->execute();

        $row = $stmt->rowCount();

    } catch (PDOException $e) {
        echo "Connection failed";
    }

        return $row;    

}

function clearFilename($google_id){


    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
    

        $stmt = $dbh->prepare("UPDATE PROFILE
        SET filename=NULL
        WHERE google_id=:google_id");

        $stmt->bindParam(':google_id', $google_id);
           
        $stmt->execute();

        $row = $stmt->rowCount();

    } catch (PDOException $e) {
        echo "Connection failed";
    }

        return $row;

}

function createProfile($google_id, $email_address, $given_name, $family_name, $gender, $school_id, $major, $year, $grad_year, $is_volunteer, $is_hacker, $filename){

    try {

        $dbh = new PDO(PDOCONNECTIONSTRING, PROFILEUSER, PROFILEPASSWORD);
    

        $stmt = $dbh->prepare("INSERT INTO PROFILE(google_id, email_address, given_name, family_name,
        gender, school_id, major, year, grad_year, is_volunteer, is_hacker, filename)
        VALUES (:google_id, :email_address, :given_name, :family_name, :gender, :school_id,
        :major, :year, :grad_year, :is_volunteer, :is_hacker, :filename)");

        $stmt->bindParam(':google_id', $google_id);
        $stmt->bindParam(':email_address', $email_address);
        $stmt->bindParam(':given_name', $given_name);
        $stmt->bindParam(':family_name', $family_name);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':school_id', $school_id);
        $stmt->bindParam(':major', $major);
        $stmt->bindParam(':year', $year);
        $stmt->bindParam(':grad_year', $grad_year);
        $stmt->bindParam(':is_volunteer', $is_volunteer);
        $stmt->bindParam(':is_hacker', $is_hacker);
        $stmt->bindParam(':filename', $filename);   
        $stmt->execute();

        $row = $dbh->lastInsertId();

    } catch (PDOException $e) {
        echo "Connection failed";
    }

        return $row;    

}

?>