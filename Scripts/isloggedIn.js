 
 "use strict";

 (() => {
   //check if the user is logged in
   if (sessionStorage.getItem("user")) 
   {
     //redirect to the secure area
     location.href = "contact-list.html";
   }
   
 })();

