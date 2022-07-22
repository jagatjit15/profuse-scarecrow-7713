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
login.addEventListener("click", authenticateUser);

async function authenticateUser() {
  let password = document.getElementById("login_pass").value;
  let username = document.getElementById("login_name").value;
  let User = {
    password: password,
    username: username,
  };

  User = JSON.stringify(User);
  let response = await fetch("http://masai-api-mocker.herokuapp.com/auth/login",
    {
      method: "POST",
      body: User,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await response.json();
  console.log(data);
}

// https://masai-api-mocker.herokuapp.com
