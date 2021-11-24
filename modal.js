// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeMod = document.querySelectorAll(".close");
const nav = document.querySelectorAll(".icon");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const click = document.getElementById("button");
const click2 = document.getElementById("button2");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var firstv = document.getElementById("first");
var lastv = document.getElementById("last");
var emailv = document.getElementById("email");
var emailv = document.getElementById("email");
var bday = document.getElementById("birthdate");
var qtty = document.getElementById("quantity");
var check = document.getElementById("checkbox1");
var error = "";
var border = "";


//launch navigation closing / opening

nav.forEach((icon) => icon.addEventListener("click", editNav));


//make nav bar appear / disapear
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal close
closeMod.forEach((close) => close.addEventListener("click", closeModal));

// close modal
function closeModal() {
  modalbg.style.display = "none";
  modalbg2.style.display = "none";
}

// prevent submit button from normal behavior

click.addEventListener("click", function (e) {
  e.preventDefault();
    validate();
});

//close modal if button is clicked on confirmation page

click2.addEventListener("click", function (e) {
  closeModal();
});

//validation of the form

function validate() {

  //reset error and border before checks

  if (error != "") {
    error.style.display = "none";
    error = "";
    if (border != ""){
      border.style.border = "none";
      border = "";
    }
  }

  //verify agreement to terms and conditions

  if (!check.checked) {
    check.focus();
    error = document.getElementById("termes");
  }

  //check if any location is checked

  for (var i = 1; i < 7; i++) {
    var loc = document.getElementById('location' + i);
    if (loc.checked) {
      var checked = true;
    }
  }

  if (checked != true) {
    error = document.getElementById("loc");
  }

  //make sure there is a quantity of previous competitions

  if (qtty.value < 0 || qtty.value == "") {
    qtty.focus();
    error = document.getElementById("numb");
    border = document.getElementById("quantity");
  }

  //Make sure a birthday is entered

  if (bday.value.length != 10) {
    bday.focus();
    error = document.getElementById("date");
    border = document.getElementById("birthdate");
  }

  //Make sure the mail is indeed, a mail (a @, letters, the .fr/com/...)

  if (!emailv.value.match(mailformat)) {
    emailv.focus();
    error = document.getElementById("Mail");
    border = document.getElementById("email");
  }

  // Make sure the name has more than 2 letters and doesn't have any number or special caracter

  if (lastv.value.length < 2) {
    lastv.focus();
    error = document.getElementById("Nom");
    border = document.getElementById("last");
  }

  if (lastv.value.match(/[0-9!@#\$%\^\&*\)\(+=._-]/i)) {
    lastv.focus();
    error = document.getElementById("Nomsp");
    border = document.getElementById("last");
  }

  // Make sure the first name has more than 2 letters and doesn't have any number or special caracter

  if (firstv.value.length < 2) {
    firstv.focus();
    error = document.getElementById("Prénom");
    border = document.getElementById("first");
  }

  if (firstv.value.match(/[0-9!@#\$%\^\&*\)\(+=._-]/i)) {
    firstv.focus();
    error = document.getElementById("Prénomsp");
    border = document.getElementById("first");
  }

  // If there's any error, make it appear, put the red border

  if (error != "") {
    if (border != ""){
      border.style.border = "red 1px solid";
    }
    error.style.display = "block";
    return false
  }

  //If no errors, put on congratulation page and reset the form

  modalbg2.style.display = "block";
  modalbg.style.display = "none";
  form.reset();
  return true

}




