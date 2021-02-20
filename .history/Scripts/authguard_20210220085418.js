 
 "use strict";

 (() => {
   //check if the user is not logged in
   if (!sessionStorage.getItem("user")) 
   {
     //redirect to the login page 
     location.href = "login.html";
   }

 })();

