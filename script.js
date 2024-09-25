const pwd = document.getElementById("userpwd")
const confirmPwd = document.getElementById("confirmpwd")
const errorText = document.querySelector(".error-text")
const inputs = document.querySelectorAll("input")

function validatePwd(){
  if(pwd.value !== confirmPwd.value){
    confirmPwd.setCustomValidity("Password Don't Match")
    confirmPwd.style.cssText = `
      border: 1px solid red;
    `
    pwd.style.cssText = `
      border: 1px solid red;
    `
    errorText.style.cssText = ` display:block;`
  }else{
    confirmPwd.setCustomValidity("")
    confirmPwd.style.cssText = `
    border: 1px solid #E5E7EB;
  `
  pwd.style.cssText = `
    border: 1px solid #E5E7EB;
  `
  errorText.style.cssText = ` display:none;`
  }
}


pwd.onchange = validatePwd;
confirmPwd.onkeyup = validatePwd;