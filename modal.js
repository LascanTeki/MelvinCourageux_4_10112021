function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeMod = document.querySelectorAll(".close");
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

//validation of the form

click.addEventListener("click", function (e) {
  e.preventDefault();
    validate();
});

click2.addEventListener("click", function (e) {
  closeModal();
});


function validate() {

  if (error != "") {
    error.style.display = "none";
    error = "";
    if (border != ""){
      border.style.border = "none";
      border = "";
    }
  }

  if (!check.checked) {
    check.focus();
    error = document.getElementById("termes");
  }


  for (var i = 1; i < 7; i++) {
    var loc = document.getElementById('location' + i);
    if (loc.checked) {
      var checked = true;
    }
  }

  if (checked != true) {
    error = document.getElementById("loc");
  }

  if (qtty.value < 0 || qtty.value == "") {
    qtty.focus();
    error = document.getElementById("numb");
    border = document.getElementById("quantity");
  }

  if (bday.value.length != 10) {
    bday.focus();
    error = document.getElementById("date");
    border = document.getElementById("birthdate");
  }


  if (!emailv.value.match(mailformat)) {
    emailv.focus();
    error = document.getElementById("Mail");
    border = document.getElementById("email");
  }

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


  if (error != "") {
    if (border != ""){
      border.style.border = "red 1px solid";
    }
    error.style.display = "block";
    return false
  }

  
  modalbg2.style.display = "block";
  modalbg.style.display = "none";
  form.reset();
  return true

}




