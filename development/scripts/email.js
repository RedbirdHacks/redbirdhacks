$(document).ready(function() {

    $("#address")
        .focus(function() { $(this).select(); } )
        .mouseup(function(e) {e.preventDefault(); });


    function getVar(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable)
                return pair[1];
        }

        return(false);
    }

    if (getVar("email") == "valid") {

        $("#address").notify("Thank you for subscribing! We will keep you up to date!", {
            autoHide: false,
            elementPosition: 'bottom',
            className: 'success',
        });

    } else if (getVar("email") == "invalid") {

        $("#address").notify("Please enter a valid email address.", {
          autoHide: false,
          elementPosition: 'bottom',
          className: 'warn',
        });

    }

});

