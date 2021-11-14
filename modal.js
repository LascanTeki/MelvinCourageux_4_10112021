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
const modalBtn = document.querySelectorAll(".modal-btn");
const closeMod = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const click = document.getElementById("button")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var firstv = document.getElementById("first");
var lastv = document.getElementById("last");
var emailv = document.getElementById("email");
var emailv = document.getElementById("email");
var bday = document.getElementById("birthdate");
var qtty = document.getElementById("quantity");
var check = document.getElementById("checkbox1");

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
}

//validation of the form

click.addEventListener("click", function (e) {
  e.preventDefault();
  validate();

});

function validate() {


  if (firstv.value.length < 2) {
    firstv.focus();
    console.log(firstv.value);
    return false
  }

  if (lastv.value.length < 2) {
    lastv.focus();
    return false
  }

  if (!emailv.value.match(mailformat)) {
    emailv.focus();
    return false
  }

  if (bday.value.length != 10) {
    bday.focus();
    return false
  }

  if (qtty < 0) {
    qtty.focus();
    console.log("quant");
    return false
  }

  for (var i = 1; i<7; i++) {
    var loc = document.getElementById('location'+i);
    console.log(i);
    if (loc.checked) {
      console.log("checked");
      var checked = true;
    }
  }

  if (checked != true) {
    console.log("nochecked");
    return false
  }

  if (!check.checked){
    check.focus();
    return false
  }


  return true

}
