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
