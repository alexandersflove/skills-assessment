"use strict";

var contactsArea = document.getElementById("contactsArea");
/*Selects all elements with the email and phone classes and then toggles hide on both */
var toggleDisplay = function toggleDisplay() {
  var emails = document.querySelectorAll(".contract-entry-info--email");
  var phones = document.querySelectorAll(".contract-entry-info--phone");

  for (var i = 0; i < emails.length; i++) {
    emails[i].classList.toggle("hide");
    phones[i].classList.toggle("hide");
  }
};
/* Drop dowm more info if a contact is clicked on the right columns. Click only works for target element, not children/the dropdown */

var contactClick = function contactClick(e) {
  //this is okay because I know col-right is only used in my
  //markup this way.
  if (e.target.classList[0].includes("col-right")) {
    e.srcElement.children[1].classList.toggle("hide");
    e.srcElement.classList.toggle("info-focus");
  } else {
    return;
  }
};

var rightCols = document.querySelectorAll(".col-right");

for (var i = 0; i < rightCols.length; i++) {
  rightCols[i].addEventListener("click", contactClick);
}
