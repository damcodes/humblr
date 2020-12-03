document.addEventListener("DOMContentLoaded", renderPage)

function renderPage() {
  const navParent = document.querySelector("nav")
  const navBar = document.createElement("nav")
  const signUpBtn = document.createElement("button")
  signUpBtn.innerText = "Sign Up"
  signUpBtn.addEventListener("click", signUp)
  navBar.appendChild(signUpBtn)
  const signInBtn = document.createElement("button")
  signInBtn.innerText = "Sign In"
  // signInBtn.addEventListener("click", signIn)
  navBar.appendChild(signInBtn)
  navParent.appendChild(navBar)
}