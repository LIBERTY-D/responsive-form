const logBtn = document.querySelector(".log");
const signBtn = document.querySelector(".sine");
const slide = document.querySelector(".slide-btn");
const loginForm = document.querySelector(".login");
const signUpForm = document.querySelector(".signUp");
function loginF() {
  slide.style.left = "0%";
  signUpForm.style.left = "-50%";
  loginForm.style.left = "0%";
}
function signF() {
  slide.style.left = "50%";
  signUpForm.style.left = "5%";
  loginForm.style.left = "-50%";
}
logBtn.addEventListener("click", loginF);
signBtn.addEventListener("click", signF);
