 
 "use strict";

 (() => {
   //check if the user is not logged in
   if (!sessionStorage.getItem("user")) 
   {
     //redirect to the secure area
     location.href = "login.html";
   }
   
 })();

