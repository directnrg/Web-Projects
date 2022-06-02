/*    
 *    Photo gallery
 *    Variables and functions
 *    Author: Fabian Soto  
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1, 2, 3, 4, 5];
var autoAdvance = setInterval(rightAdvance, 5000);
var figureCount = 3;



/* add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   var filename;
   var currentFig;
   if (figureCount === 3) {
      for (var i = 1; i < 4; i++) {
         filename = "imgs/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i - 1];
         currentFig.src = filename;
      }
   } else {
      for (var i = 0; i < 5; i++) {
         filename = "imgs/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src = filename;
      }
   }
}

/* stop automatic image switching and call rightAdvance() function */
function rightArrow() {
   clearInterval(autoAdvance);
   rightAdvance();
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* switch to 5-image layout */
function previewFive() {
   var articleEl = document.getElementsByTagName("article")[0];
   // create figure and img elements for fifth image
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";
   lastFigure.appendChild(lastImage);
   //   articleEl.appendChild(lastFigure);
   articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));

   //clone figure element for fifth image and edit to be first image
   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   articleEl.insertBefore(firstFigure, document.getElementById("fig2"));

   figureCount = 5;
   //change button to hide extra images
   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewFive, false);
      numberButton.addEventListener("click", previewThree, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewFive);
      numberButton.attachEvent("onclick", previewThree);
   }

   // add appropriate src values to two new img elements
   document.getElementsByTagName("img")[0].src = "imgs/IMG_0" + photoOrder[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "imgs/IMG_0" + photoOrder[4] + "sm.jpg";
}

/* switch to 3-image layout */
function previewThree() {
   var articleEl = document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");
   figureCount = 3;
   articleEl.removeChild(document.getElementById("fig1"));
   articleEl.removeChild(document.getElementById("fig5"));
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.addEventListener("click", previewFive, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
}

/* open center figure in separate window */
function zoomFig() {
   var propertyWidth = 960;
   var propertyHeight = 600;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "width=960,height=600";
   winOptions += ",left=" + winLeft;
   winOptions += ",top=" + winTop;
   var zoomWindow = window.open("zoom_photos_slider.html", "zoomwin", winOptions);
   zoomWindow.focus();
}


/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick", leftArrow);
   }

   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false);
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow);
   }

   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
      mainFig.addEventListener("click", zoomFig, false);
   } else if (mainFig.attachEvent) {
      mainFig.attachEvent("onclick", zoomFig);
   }

   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener("click", previewFive, false);
   } else if (showAllButton.attachEvent) {
      showAllButton.attachEvent("onclick", previewFive);
   }
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
   HideButtons();
}


/* assignment 3 favorites section*/


/* assigment 3 add and remove from favorites*/


function FavoritesImgsEventListeners() {
   
   // event listener favorite image 1.
   var FavImg1 = document.querySelector("#favorite1");
   if (FavImg1.hasAttribute("src")) {
      FavImg1.addEventListener("click", ShowButtonFav1, false);
   } else if (FavImg1.hasAttribute("src")) {
      FavImg1.attachEvent("onclick", ShowButtonFav1);
   }
   // event listener favorite image 2.
   var FavImg2 = document.querySelector("#favorite2");
   if (FavImg2.hasAttribute("src")) {
      FavImg2.addEventListener("click", ShowButtonFav2, false);
   } else if (FavImg2.hasAttribute("src")) {
      FavImg2.attachEvent("onclick", ShowButtonFav2);
   }
   // event listener favorite image 3.
   var FavImg3 = document.querySelector("#favorite3");
   if (FavImg3.hasAttribute("src")) {
      FavImg3.addEventListener("click", ShowButtonFav3, false);
   } else if (FavImg3.hasAttribute("src")) {
      FavImg3.attachEvent("onclick", ShowButtonFav3);
   }
   // event listener favorite image 4.
   var FavImg4 = document.querySelector("#favorite4");
   if (FavImg4.hasAttribute("src")) {
      FavImg4.addEventListener("click", ShowButtonFav4, false);
   } else if (FavImg4.hasAttribute("src")) {
      FavImg4.attachEvent("onclick", ShowButtonFav4);
   }
   // event listener favorite image 5.
   var FavImg5 = document.querySelector("#favorite5");
   if (FavImg5.hasAttribute("src")) {
      FavImg5.addEventListener("click", ShowButtonFav5, false);
   } else if (FavImg5.hasAttribute("src")) {
      FavImg5.attachEvent("onclick", ShowButtonFav5);
   }
}
//hide all buttons on load page
function HideButtons() {
   var rmFavButton1 = document.getElementById("rmFav1");
   var rmFavButton2 = document.getElementById("rmFav2");
   var rmFavButton3 = document.getElementById("rmFav3");
   var rmFavButton4 = document.getElementById("rmFav4");
   var rmFavButton5 = document.getElementById("rmFav5");

   rmFavButton1.setAttribute("style", "display:none");
   rmFavButton2.setAttribute("style", "display:none");
   rmFavButton3.setAttribute("style", "display:none");
   rmFavButton4.setAttribute("style", "display:none");
   rmFavButton5.setAttribute("style", "display:none");

}

function ShowButtonFav1() {
   var rmFavButton = document.getElementById("rmFav1");
   if (rmFavButton.style.display === "none") {
      rmFavButton.style.display = "block";
   }
   else {
      rmFavButton.style.display = "none";
   }
   rmFavButton.textContent = "X";
   rmFavButton.onclick = function () { rmFavorite1() };

}

function rmFavorite1() {
   if (document.getElementById("favorite1").hasAttribute("src")) {
      document.getElementById("favorite1").src = "";
      document.getElementById("favorite1").style.display = "none";
   }
   if (document.getElementById("rmFav1").style.display === "block") {
      document.getElementById("rmFav1").style.display = "none";
   }
   var rmEventFav = document.querySelector("#favorite1")
   if (rmEventFav.removeEventListener) {
      rmEventFav.removeEventListener("click", ShowButtonFav1, false)
   } else if (rmEventFav.detachEvent) {
      rmEventFav.detachEvent("onclick", ShowButtonFav1)
   }
}

function ShowButtonFav2() {
   var rmFavButton = document.getElementById("rmFav2");
   if (rmFavButton.style.display === "none") {
      rmFavButton.style.display = "block";
   }
   else {
      rmFavButton.style.display = "none";
   }
   rmFavButton.innerHTML = "X";
   rmFavButton.onclick = function () { rmFavorite2() };
}

function rmFavorite2() {
   if (document.getElementById("favorite2").hasAttribute("src")) {
      document.getElementById("favorite2").src = "";
      document.getElementById("favorite2").style.display = "none";
   }
   if (document.getElementById("rmFav2").style.display === "block") {
      document.getElementById("rmFav2").style.display = "none";
   }
   var rmEventFav = document.querySelector("#favorite2")
   if (rmEventFav.removeEventListener) {
      rmEventFav.removeEventListener("click", ShowButtonFav2, false)
   } else if (rmEventFav.detachEvent) {
      rmEventFav.detachEvent("onclick", ShowButtonFav2)
   }
}

function ShowButtonFav3() {
   var rmFavButton = document.getElementById("rmFav3");
   if (rmFavButton.style.display === "none") {
      rmFavButton.style.display = "block";
   }
   else {
      rmFavButton.style.display = "none";
   }
   rmFavButton.innerHTML = "X";
   rmFavButton.onclick = function () { rmFavorite3() };

}

function rmFavorite3() {
   if (document.getElementById("favorite3").hasAttribute("src")) {
      document.getElementById("favorite3").src = "";
      document.getElementById("favorite3").style.display = "none";
   }
   if (document.getElementById("rmFav3").style.display === "block") {
      document.getElementById("rmFav3").style.display = "none";
   }
   var rmEventFav = document.querySelector("#favorite3")
   if (rmEventFav.removeEventListener) {
      rmEventFav.removeEventListener("click", ShowButtonFav3, false)
   } else if (rmEventFav.detachEvent) {
      rmEventFav.detachEvent("onclick", ShowButtonFav3)
   }
}

function ShowButtonFav4() {
   var rmFavButton = document.getElementById("rmFav4");
   if (rmFavButton.style.display === "none") {
      rmFavButton.style.display = "block";
   }
   else {
      rmFavButton.style.display = "none";
   }
   rmFavButton.innerHTML = "X";
   rmFavButton.onclick = function () { rmFavorite4() };
}

function rmFavorite4() {
   if (document.getElementById("favorite4").hasAttribute("src")) {
      document.getElementById("favorite4").src = "";
      document.getElementById("favorite4").style.display = "none";
   }
   if (document.getElementById("rmFav4").style.display === "block") {
      document.getElementById("rmFav4").style.display = "none";
   }
   var rmEventFav = document.querySelector("#favorite4")
   if (rmEventFav.removeEventListener) {
      rmEventFav.removeEventListener("click", ShowButtonFav4, false)
   } else if (rmEventFav.detachEvent) {
      rmEventFav.detachEvent("onclick", ShowButtonFav4)
   }
}

function ShowButtonFav5() {
   var rmFavButton = document.getElementById("rmFav5");
   if (rmFavButton.style.display === "none") {
      rmFavButton.style.display = "block";
   }
   else {
      rmFavButton.style.display = "none";
   }
   rmFavButton.innerHTML = "X";
   rmFavButton.onclick = function () { rmFavorite5() };
}

function rmFavorite5() {
   if (document.getElementById("favorite5").hasAttribute("src")) {
      document.getElementById("favorite5").src = "";
      document.getElementById("favorite5").style.display = "none";
   }
   if (document.getElementById("rmFav5").style.display === "block") {
      document.getElementById("rmFav5").style.display = "none";
   }
   var rmEventFav = document.querySelector("#favorite5")
   if (rmEventFav.removeEventListener) {
      rmEventFav.removeEventListener("click", ShowButtonFav5, false)
   } else if (rmEventFav.detachEvent) {
      rmEventFav.detachEvent("onclick", ShowButtonFav5)
   }
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}

