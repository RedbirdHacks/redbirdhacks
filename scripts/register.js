function populateDetails(){

    $.ajax({
        url: 'scripts/register.php',
        type: 'GET',
        data: 'loadUser'
    }).done(function(data){

        // Set our user details
        var user = JSON.parse(data);

        // And populate the fields.
        $("input#firstName").val(user.given_name);
        $("input#lastName").val(user.family_name);
        $("input#emailAddress").val(user.email_address);
        $("select#gender").val(user.gender);
        $("input#school").val(user.school_name);
        $("input#major").val(user.major);
        $("select#class").val(user.year);
        $("input#gradYear").val(user.grad_year);
        $("input#linkedIn").val(user.linkedIn);
        $("input#gitHub").val(user.gitHub);
        
        if(user.filename){

            $("span#filename").attr('aria-hidden', 'false');
            $("span#filename").toggleClass('hidden');

            $("p#filename").prepend(user.filename);

        }

    });

}

function deleteResume(){

        $.ajax({
        url: 'scripts/register.php',
        type: 'GET',
        data: 'deleteResume',
        processData: false,
        contentType: false
    }).done(function(data){

        if(data){

            // Delete was successful.
            // Hide the file field.
            $("span#filename").attr('aria-hidden', 'true');
            $("span#filename").toggleClass('hidden');

        }

    });

}

function registerNotify(data){

    // Clear current notifications
    $('.notifyjs-wrapper').trigger('notify-hide');

    // Show change notifications
    // If there are changes...
    if(data.changes){

        $.notify("Changes were saved!", {
            
                className: 'success',
                globalPosition: 'top right'

        });
    // If there aren't changes
    }else{

        $.notify("Nothing was changed.", {
            
                className: 'warn',
                globalPosition: 'top right',
                autoHide: true

        });

    }

    // Show error messages
    // File related errors
    switch(data.errors.file){

        // File is too large!
        case 1:
        case 2:
            $.notify('Your resume was too large! Max size is 2MB.', {
                
                    className: 'error',
                    globalPosition: 'top right',
                    autoHide: false

            });
        break;

    }

    $("input#submit").prop('disabled',false);
    $("input#submit").attr('aria-disabled',false);
}

$(document).ready(function(){

    // Form actions
    $("#registerForm").submit(function(event) {

        $.ajax({
            url: 'scripts/register.php',
            type: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            beforeSend: function(){

                $("input#submit").prop('disabled',true);
                $("input#submit").attr('aria-disabled',true);

                $("input#submit").notify('Wait...', {
                
                    className: 'info',
                    elementPosition: 'top center',
                    autoHide: false,
                    arrowShow: false,
                    showDuration: 0

                });

            }
        }).done(function(data){

            registerNotify(JSON.parse(data));
            console.log(data);

        });
        event.preventDefault();
    
    });

    // Delete resume action
    $("#deleteResume").click(function(event){

        deleteResume();

        event.preventDefault();

    });

    // Suggest schools
    var availableTags = [
        "Chicago State University",
        "Eastern Illinois University",
        "Governors State University",
        "Illinois State University",
        "Northeastern Illinois University",
        "Northern Illinois University",
        "Southern Illinois University",
        "Southern Illinois University Carbondale ",
        "Southern Illinois University Edwardsville",
        "University of Illinois system",
        "University of Illinois at Chicago",
        "University of Illinois at Springfield",
        "University of Illinois at Urbana–Champaign",
        "Western Illinois University",
        "Western Illinois University-Quad Cities",
        "Augustana College",
        "Blackburn College",
        "Columbia College Chicago",
        "Elmhurst College",
        "Eureka College",
        "Greenville College",
        "Illinois College",
        "Knox College",
        "Lake Forest College",
        "Lakeview College of Nursing",
        "Lincoln College",
        "MacMurray College",
        "Monmouth College",
        "North Central College",
        "Principia College",
        "Saint Anthony College of Nursing",
        "Shimer College",
        "Trinity Christian College",
        "VanderCook College of Music",
        "Wheaton College",
        "Aurora University",
        "Benedictine University",
        "Bradley University",
        "The Chicago School of Professional Psychology",
        "University of Chicago",
        "Concordia University Chicago",
        "DePaul University",
        "Dominican University",
        "East–West University",
        "Erikson Institute",
        "Illinois Institute of Technology",
        "Illinois Wesleyan University",
        "Judson University",
        "Lewis University",
        "Lincoln Christian University",
        "Loyola University Chicago",
        "Lutheran School of Theology at Chicago",
        "McKendree University",
        "Midwestern University",
        "Millikin University",
        "Moody Bible Institute",
        "National Louis University",
        "National University of Health Sciences",
        "North Park University",
        "Northern Baptist Theological Seminary",
        "Northwestern University",
        "Olivet Nazarene University",
        "Quincy University",
        "Robert Morris University",
        "Rockford University",
        "Roosevelt University",
        "Rosalind Franklin University of Medicine and Science",
        "Rush University",
        "University of St. Francis",
        "Saint Xavier University",
        "School of the Art Institute of Chicago",
        "Spertus Institute for Jewish Learning and Leadership",
        "Toyota Technological Institute at Chicago",
        "Trinity International University",
        "American InterContinental University",
        "Argosy University",
        "Chamberlain College of Nursing",
        "Coyne College",
        "DeVry University",
        "Everest College",
        "Fox College",
        "Harrington College of Design",
        "Illinois Center for Broadcasting",
        "Illinois Institute of Art – Chicago",
        "Illinois School of Professional Psychology",
        "International Academy of Design & Technology – Schaumburg",
        "ITT Technical Institute",
        "Kendall College",
        "Lincoln College of Technology- Melrose Park",
        "Midstate College",
        "Midwest College of Oriental Medicine",
        "Midwest Technical Institute",
        "Northwestern College",
        "Pacific College of Oriental Medicine",
        "Rasmussen College",
        "Sanford–Brown",
        "Solex College",
        "Strayer University",
        "Taylor Business Institute",
        "Tribeca Flashpoint Media Arts Academy",
        "Universal Technical Institute",
        "University of Phoenix",
        "Vatterott College",
        "Westwood College",
        "Black Hawk College",
        "City Colleges of Chicago",
        "Richard J. Daley College",
        "Kennedy–King College",
        "Malcolm X College",
        "Olive–Harvey College",
        "Harry S Truman College",
        "Harold Washington College",
        "Wilbur Wright College",
        "Danville Area Community College",
        "College of DuPage",
        "East St. Louis Community College Center",
        "State Community College of East Saint Louis",
        "Metropolitan Community College",
        "Elgin Community College",
        "Harper College",
        "Heartland Community College",
        "Highland Community College",
        "Illinois Central College",
        "Illinois Eastern Community Colleges",
        "Frontier Community College",
        "Lincoln Trail College",
        "Olney Central College",
        "Wabash Valley College",
        "Illinois Valley Community College",
        "Joliet Junior College",
        "Kankakee Community College",
        "Kaskaskia College",
        "Kishwaukee College",
        "College of Lake County",
        "Lake Land College",
        "Lewis and Clark Community College",
        "Lincoln Land Community College",
        "John A. Logan College",
        "McHenry County College",
        "Moraine Valley Community College",
        "Morton College",
        "Oakton Community College",
        "Parkland College",
        "Prairie State College",
        "Rend Lake College",
        "Richland Community College",
        "Rock Valley College",
        "Carl Sandburg College",
        "Sauk Valley Community College",
        "Shawnee Community College",
        "South Suburban College",
        "Southeastern Illinois College",
        "Southwestern Illinois College",
        "Spoon River College",
        "Triton College",
        "Waubonsee Community College",
        "John Wood Community College"
    ];
    
    $("input#school").autocomplete({
        source: availableTags
    });

    // Load profile
    populateDetails();

});