let obj = {
  name: "",
  email: "",
  password: "",
  country: "",
};
/*username*/
document.getElementById("userName").addEventListener("input", validateName);
function validateName(e) {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  obj.name = userName;
  let convert = +userName;
  console.log(typeof convert, convert, userName);
  //   console.log(typeof userName, userName);
  if (userName == "" || userName == null || userName.length == 0) {
    document.getElementById("nameWarning").innerHTML =
      "* please fill user name  ";
  } else if (userName.length >= 1 && userName.length < 3) {
    document.getElementById("nameWarning").innerHTML = "* min 3 char required ";
  } else if (isNaN(convert) !== true) {
    document.getElementById("nameWarning").innerHTML =
      "* Only numbers are not a valid ";
  } else {
    document.getElementById("nameWarning").innerHTML = "";
  }
}
/*email*/
document.getElementById("mail").addEventListener("input", validateEmail);

function validateEmail(e) {
  e.preventDefault();
  const warning = document.getElementById("warnMail");
  const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mail = document.getElementById("mail").value;
  obj.email = mail;
  console.log(mail);
  e.preventDefault();
  if (mail.match(validMail)) {
    warning.innerHTML = "";
  } else {
    warning.innerHTML = "*please enter a valid mail Id";
  }
}
/*country*/
let country = document.getElementById("selectCon");
country.addEventListener("change", validCountry);
function validCountry() {
  obj.country = country.value;
  if (country.value == "select country") {
    document.getElementById("validCon").innerHTML = "please select country";
  } else {
    document.getElementById("validCon").innerHTML = "";
  }
}
/*password*/
document.getElementById("pass").addEventListener("input", passwordValid);
const password = document.getElementById("pass");
function passwordValid(e) {
  e.preventDefault;
  obj.password = password.value;
  console.log(password.value);
  const warning = document.getElementById("passwordWarn");
  console.log(password);
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.value.match(validPassword)) {
    warning.innerHTML = "";
  } else if (password.value == "") {
    warning.innerHTML = "* password must be filled";
  } else {
    warning.innerHTML =
      "* Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
  }
}

/*confirm password*/
document.getElementById("confirm").addEventListener("input", confirmPassword);
function confirmPassword() {
  const confirmPass = document.getElementById("confirm").value;
  console.log(confirmPass);
  const warning = document.getElementById("confWarn");
  if (confirmPass == "") {
    // console.log(confirmPass, "ghy");
    warning.innerHTML = "* password must be filled";
  } else if (password.value.match(confirmPass)) {
    warning.innerHTML = "";
  } else {
    warning.innerHTML = "* password not matching";
  }
}
/*warning*/

const tags = document.querySelectorAll("input");

document.getElementById("the-form").addEventListener("submit", alert);
function alert(e) {
  e.preventDefault();
  // console.log(tags);
  alertMsg();
  if (
    tags[0].value != "" &&
    tags[1].value != "" &&
    tags[2].value != "" &&
    tags[3].value != ""
  ) {
    creatResource(obj);
    document.getElementById("sub").style.display = "block";
  }
}

function alertMsg() {
  if (tags[0].value == "") {
    document.getElementById("nameWarning").innerHTML =
      "*Username cannot be blank.";
  }
  if (tags[1].value == "") {
    document.getElementById("warnMail").innerHTML = "*Email cannot be blank.";
  }
  if (tags[2].value == "") {
    document.getElementById("passwordWarn").innerHTML =
      "*password cannot be blank.";
  }
  if (tags[3].value == "") {
    document.getElementById("confWarn").innerHTML =
      "*password cannot be blank.";
  }
  if (country.value == "select country") {
    document.getElementById("validCon").innerHTML = "please select country";
  }
}
/*validation*/

function creatResource(obj) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
