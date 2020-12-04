function login() {
  const main = document.querySelector("main")
  removeAllChildren(main)
  renderLoginPage(main)
}

function renderLoginPage(main) {
  removeAllChildren(main)
  const formDiv = document.createElement("div")
  formDiv.className = "loginBox"
  const loginHeader = document.createElement("h2")
  loginHeader.innerText = "Log In"
  const loginForm = document.createElement("form")
  const emailField = document.createElement("input")
  emailField.placeholder = "Email"
  emailField.id = "email-login"
  const usernameField = document.createElement("input")
  usernameField.placeholder = "Username"
  usernameField.id = "username-login"
  const loginBtn = document.createElement("input")
  loginBtn.type = "submit"
  loginBtn.value = "Log In"
  loginForm.appendChild(emailField)
  loginForm.appendChild(document.createElement("br"))
  loginForm.appendChild(usernameField)
  loginForm.appendChild(document.createElement("br"))
  loginForm.appendChild(loginBtn)

  formDiv.appendChild(loginHeader)
  formDiv.appendChild(loginForm)
  main.appendChild(formDiv)

  loginForm.addEventListener("submit", e => newSession(e))
}

function newSession(e) {
  e.preventDefault() 
  const form = e.target
  const email = form.querySelector("#email-login").value
  const username = form.querySelector("#username-login").value
  fetch("http://localhost:3000/sessions", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: email,
      username: username
    })
  })
  .then( res => res.json() )
  .then( currentUser => {
    if (currentUser instanceof Array) {
      renderErrors(currentUser, form)
    } else {
      renderUserHome(currentUser) //homepage.js
    }
  })
}

function renderErrors(errors, form) {
  errors.forEach(error => {
    const parent = form.parentNode
    if (parent.firstChild.innerText === "Incorrect email or username.") {
      parent.removeChild(parent.firstChild)
    }
    const errorP = document.createElement("p")
    errorP.style.color = "red"
    errorP.innerText = error
    errorP.style.textAlign = "center"
    parent.insertBefore(errorP, parent.firstChild)
  })
}