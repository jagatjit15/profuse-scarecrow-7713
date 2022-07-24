// importing from navbar.js
import { funcNavbar } from "../export/navbar.js";

let nav = document.querySelector("nav");
nav.innerHTML = funcNavbar();

let username = localStorage.getItem("username");

let name = document.getElementById("user_name");
function userName(username) {
  if (username === null) {
    name.innerText = "Name Not Mentioned";
  } else {
    name.innerText = username;
  }
}
userName();
