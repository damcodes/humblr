document.addEventListener("DOMContentLoaded", renderPage)

function renderPage() {
  const main = document.querySelector("main")
  removeAllChildren(main)
  const navBar = document.querySelector("nav")
  // const navBar = document.createElement("nav")
  const signUpBtn = document.createElement("button")
  signUpBtn.innerText = "Sign Up"
  navBar.appendChild(signUpBtn)
  const loginBtn = document.createElement("button")
  loginBtn.innerText = "Log In"
  navBar.appendChild(loginBtn)

  loginBtn.addEventListener("click", login)
  signUpBtn.addEventListener("click", signUp)
}