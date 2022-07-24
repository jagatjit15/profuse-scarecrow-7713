import { funcNavbar } from "../export/navbar.js";

let nav = document.querySelector("nav");
nav.innerHTML = funcNavbar();

import svgis from "../export/svg.js";

let span1 = document.querySelector("#sp1");
let span2 = document.querySelector("#sp2");
let span3 = document.querySelector("#sp3");
let span4 = document.querySelector("#sp4");
span1.innerHTML = svgis();
span2.innerHTML = svgis();
span3.innerHTML = svgis();
span4.innerHTML = svgis();

let login = document.querySelector("#login_btn");
login.addEventListener("click", authenticate);

async function authenticate() {
  let signin_data = {
    password: document.getElementById("login_pass").value,
    username: document.getElementById("login_name").value,
  };

  signin_data = JSON.stringify(signin_data);
  let api_link_ = "https://masai-api-mocker.herokuapp.com/auth/login";

  let response = await fetch(api_link_, {
    method: "POST",
    body: signin_data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  // append(username, data.token)
  console.log(data);

  let name = document.getElementById("login_name");
  localStorage.setItem("username", JSON.stringify());

  window.location.href = "./home.html";
}

// https://masai-api-mocker.herokuapp.com
