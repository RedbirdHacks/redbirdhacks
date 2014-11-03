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
        $("input#isHacker").prop('checked', parseInt(user.is_hacker));
        $("input#isVolunteer").prop('checked', parseInt(user.is_volunteer));
        
        if(user.filename){

            $("span#filename").attr('aria-hidden', 'false');
            $("span#filename").toggleClass('hidden');

            $("p#filename").append(user.filename);

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
    $("#registration").submit(function(event) {

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

    // Load profile
    populateDetails();

});