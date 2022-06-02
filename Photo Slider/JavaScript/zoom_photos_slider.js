
 /*    Photo zoom
 *    Variables and functions
 *    Author: Fabian Andres Soto Palacio  
 *    Date:   June 16th 2021

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */

var photoOrderArray = window.opener.photoOrder;
var figFilename = "imgs/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
      closeWindowDiv.addEventListener("click", closeWin, false);
   } else if (closeWindowDiv.attachEvent) {
      closeWindowDiv.attachEvent("onclick", closeWin);
   }
}

/* add to favorites assigment 3*/


function addImgToFavorites() {
   var fileName = document.getElementById("zoomedImage").src;
   var rmBtn1pressed1 = window.opener.document.getElementById("rmFav1").checked;
   var rmBtn1pressed2 = window.opener.document.getElementById("rmFav2").checked;
   var rmBtn1pressed3 = window.opener.document.getElementById("rmFav3").checked;
   var rmBtn1pressed4 = window.opener.document.getElementById("rmFav4").checked;
   var rmBtn1pressed5 = window.opener.document.getElementById("rmFav5").checked;


   restartloop:
   while (true) {
      for (var i = 1; i <= 6; i++) {
         var favImage = "favorite" + i;
         if (window.opener.document.getElementById(favImage).src == "") {
            window.opener.document.getElementById(favImage).src = fileName;
            window.opener.document.getElementById(favImage).style.display = "block";
            window.opener.document.getElementById(favImage).style.border = "2px solid rgba(255, 255, 255, 0.3)";
            window.opener.FavoritesImgsEventListeners();
            closeWin();
            break;
         }
      }
      if (i == 6) {
         if (rmBtn1pressed1 == true || rmBtn1pressed2 == true || rmBtn1pressed3 == true ||
            rmBtn1pressed4 == true || rmBtn1pressed5 == true) {
            break restartloop;
         }
         else
         window.alert("Only 5 favorite images allowed. Please delete clicking on the image you want to delete and try again.");
         closeWin();
      }
      break;
   }
}



/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;