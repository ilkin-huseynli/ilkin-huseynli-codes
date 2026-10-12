const form = document.querySelector("#emailForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  console.log("Form submitted successfully. Email address: " + email);
});

const username = document.querySelector("#username");
const age = document.querySelector("#age");
const password = document.querySelector("#password");

const usernameInfo = document.querySelector("#usernameInfo");
const ageInfo = document.querySelector("#ageInfo");
const passwordInfo = document.querySelector("#passwordInfo");

username.addEventListener("input", function () {
  const value = username.value;

  if (value !== "" && value.length >= 4) {
    usernameInfo.style.color = "green";
  } else {
    usernameInfo.style.color = "red";
  }
});

age.addEventListener("input", function () {
  const value = age.value;
  const num = Number(value);

  if (value !== "" && num >= 18 && num <= 60) { 
    ageInfo.style.color = "green";
  } else {
    ageInfo.style.color = "red";
  }
});

password.addEventListener("input", function () {
  const value = password.value;

  if (value !== "" && value.length >= 6) {
    passwordInfo.style.color = "green";
  } else {
    passwordInfo.style.color = "red";
  }
});