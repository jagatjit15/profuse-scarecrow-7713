// importing from export file

import { inputField, captcha } from "../export/salesInq.js";
let inputfield = document.getElementById("inputfield");
inputfield.innerHTML = inputField();

let footer_form = document.getElementById("footer_form");
footer_form.innerHTML = inputField();

let captcha_sec = document.getElementById("captcha_sec");
captcha_sec.innerHTML = captcha();

let captcha_sec2 = document.getElementById("captcha_sec2");
captcha_sec2.innerHTML = captcha();

// Recruitement call back
let btn = document.getElementById("clback");
btn.addEventListener("click", callBack);
function callBack() {
  btn.innerText = "We will call you back";
  document.querySelector("#name").value = "";
  document.querySelector("#company_name").value = "";
  document.querySelector("#contact").value = "";
  document.querySelector("#designation_name").value = "";
  document.querySelector("#mail_Id").value = "";
  document.querySelector("#city").value = "";
}

let btn2 = document.getElementById("clback2");
btn2.addEventListener("click", callBack2);
function callBack2() {
  btn2.innerText = "We will call you back";
  document.querySelector("#name").value = "";
  document.querySelector("#company_name").value = "";
  document.querySelector("#contact").value = "";
  document.querySelector("#designation_name").value = "";
  document.querySelector("#mail_Id").value = "";
  document.querySelector("#city").value = "";
}