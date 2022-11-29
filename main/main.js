// Global Variables
const pwd = document.querySelector("i.password");
const pwdField = document.querySelector("#password");

const confirmPwd = document.querySelector("i.confirm_password");
const confirmPwdField = document.querySelector("#confirm_password");

const pwdFeedback = document.querySelector(".pwd-feedback");
const btn = document.querySelector("button");

// Event Listeners
pwd.addEventListener("click", e => showPassword(e, pwdField));
confirmPwd.addEventListener("click", e => showPassword(e, confirmPwdField));
confirmPwdField.addEventListener("input", () => checkPasswordMatch());

// Password Functions
function showPassword(e, field) {
  e.target.classList.toggle("fa-eye-slash");
  const currType = field.getAttribute("type") === "password" ? "text" : "password";
  field.setAttribute("type", currType);
}

function checkPasswordMatch() {
  if (pwdField.value !== confirmPwdField.value) {
    pwdFeedback.innerHTML = "Passwords do not match";
    pwdField.getElementsByClassName.border = "1px solid red";
    btn.disabled = true;
  } else {
    pwdFeedback.innerHTML = "";
    pwdField.getElementsByClassName.border = "var(--input-box)";
    btn.disabled = false
  }
}
