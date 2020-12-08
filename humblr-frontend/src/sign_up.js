function signUp() {
  const main = document.querySelector("main")
  removeAllChildren(main)
  renderSignUpForm(main)
}

function renderSignUpForm(main) {
  const signUpHeader = document.createElement("h2")
  signUpHeader.innerText = "Sign Up!"
  const formDiv = document.createElement("div")
  formDiv.className = "signUpBox"
  const parentForm = document.createElement("form")
  const emailInput = document.createElement("input")
  const usernameInput = document.createElement("input")
  const firstNameInput = document.createElement("input")
  const lastNameInput = document.createElement("input")
  const submitBtn = document.createElement("input")
  emailInput.placeholder = "Email"
  emailInput.id = "email-input"
  usernameInput.placeholder = "Username"
  usernameInput.id = "username-input"
  firstNameInput.placeholder = "First Name"
  firstNameInput.id = "firstName-input"
  lastNameInput.placeholder = "Last Name"
  lastNameInput.id = "lastName-input"
  submitBtn.type = "submit"
  submitBtn.value = "Create Account"
  let children = [emailInput, usernameInput, firstNameInput, lastNameInput, submitBtn]
  children.forEach(child => {
    parentForm.appendChild(child)
    parentForm.appendChild(document.createElement("br"))
  })
  formDiv.appendChild(signUpHeader)
  formDiv.appendChild(parentForm)
  main.appendChild(formDiv)
  parentForm.addEventListener("submit", (e) => createUser(e))
}

function createUser(e) {
  e.preventDefault()
  const form = e.target
  const email = form.querySelector("#email-input").value
  const username = form.querySelector("#username-input").value
  const firstName = form.querySelector("#firstName-input").value
  const lastName = form.querySelector("#lastName-input").value
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: email,
      username: username,
      first_name: firstName,
      last_name: lastName
    })
  }).then( res => res.json() ).then(user => {
    console.log(user)
    if (user instanceof Array) {
      showErrors(user, form)
    } else {
      renderLoginPage(document.querySelector("main")) // login.js
    }
   })
  form.reset()
}

function showErrors(errors, form) {
  let errorUl
  if (document.querySelector("ul")){
    removeAllChildren(document.querySelector("ul"))
    errorUl = document.querySelector('ul')
  } else {
    errorUl = document.createElement("ul")
  }
  errors.forEach(error => {
    const newLi = document.createElement("li")
    newLi.style.color = "red"
    newLi.innerText = error
    newLi.style.textAlign = "center"
    errorUl.appendChild(newLi)
  })
  const parent = form.parentNode
  errorUl.style.listStyleType = "none"
  parent.insertBefore(errorUl, form)
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild)
  }
}