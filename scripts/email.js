function getVar(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

if(getVar("email") == "valid"){

  alert("Thank you for subscribing! We will keep you up to date!");

}else if(getVar("email") == "invalid"){

  alert("Please enter a valid email address.");
    
}